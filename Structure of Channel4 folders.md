##Structure of Channel 4 folders

#In the rooth we have folder BUILD:
-there is where ill find the build for the main project.
-If i wish to upload that I simply console "gulp upload"

#Config files:
in config_gen folder you update the device specific config stuff
	
		npm run "generate-config-files" to update config files overall

##CSS or in this case SCSS

It is all split into VIEWS pages with a different SCSS files for it
different components such as buttons

#On each SCSS file you change you must do the "npm run build-css" to build a centralized CSS FILE

src > main > web > README for documentation on npm run commands and how things should be formated