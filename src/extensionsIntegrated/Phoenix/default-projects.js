/*
 * GNU AGPL-3.0 License
 *
 * Copyright (c) 2021 - present core.ai . All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://opensource.org/licenses/AGPL-3.0.
 *
 */

/*globals Phoenix, JSZip, Filer, fs*/

define(function (require, exports, module) {
    const ProjectManager          = require("project/ProjectManager"),
        Strings     = require("strings"),
        ZipUtils = require("utils/ZipUtils");

    async function _setupStartupProject() {
        console.log("setting up startup project", ProjectManager.getWelcomeProjectPath());
        await ZipUtils.unzipURLToLocation('assets/default-project/en.zip', ProjectManager.getWelcomeProjectPath());
        const indexHtmlPath = `${ProjectManager.getWelcomeProjectPath()}index.html`;
        fs.readFile(indexHtmlPath, 'utf8', function (err, text) {
            if(err || !text){
                return;
            }
            if(!text.includes("CLICK_HERE")){
                console.error("Default project index.html doesnt have CLICK_HERE!!!");
                return;
            }
            const newText = text.replace("CLICK_HERE", Strings.DEFAULT_PROJECT_HTML_CLICK_HERE);
            fs.writeFile(indexHtmlPath, newText, 'utf8', (writErr)=>{
                if(writErr){
                    console.error("Error translating default project index.html", writErr);
                }
            });
        });
    }
    async function _setupExploreProject() {
        let exploreProjectPath = ProjectManager.getExploreProjectPath();
        let exists = await Phoenix.VFS.existsAsync(exploreProjectPath);
        if(!exists){
            console.log("setting up explore project", exploreProjectPath);
            await ZipUtils.unzipURLToLocation('assets/sample-projects/explore.zip', exploreProjectPath);
        }
    }

    exports.init = async function () {
        if(Phoenix.firstBoot){
            _setupStartupProject();
        }
        _setupExploreProject();
    };
});
