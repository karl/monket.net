---
title: Dancing Monkeys Change Log
author: karl
template: article.pug
---

## Dancing Monkeys

Current maintainer of Dancing Monkeys: [Eric Haines](http://erich.realtimerendering.com/)

v1.06 - October 4, 2006 - Fixed "-ons" option so that it actually removes the stops. (Eric Haines)

v1.05 - September 17, 2006 - Added "-x 1" option to hone in on best BPM. Minor bug fixes. (Eric Haines)

v1.04 - August 18, 2006 - If an embedded image file is found (as used by iTunes), background and banner images are created for the song using this image, unless "-n" option is used. Fixed problem for when "-es" argument is missing (was stopping on 0 stops by default - oops). Fixed problem creating song file if song file name has trailing spaces before the ".mp3" suffix (e.g. "Test song .mp3"). (Eric Haines)

v1.03 - July 28, 2006 - Much faster execution; v1.02 had some compilation flaw. Minor memory savings and documentation changes. (Eric Haines)

v1.02 - July 3, 2006 - Major overhaul of input and output. One code correction to the algorithms used: song length now affects the total number of steps adjusted, so that long songs will have more steps overall. (Eric Haines)

v1.01 - November 3, 2003 - Corrections to output directory parsing. (Karl O'Keeffe)

v1.0 - November 1, 2003 - Original release. (Karl O'Keeffe)

## Gorilla

Current maintainer of Gorilla: [David Flink](mailto:DancingGorilla@gmail.com)

v1.1.4 - May 6, 2007 - Release with 1.06 (David Flink)

*   Fixed checkboxes, which turn out to return 0/1 instead of false/true.

v1.1.3 - February 25, 2007 - Release with 1.06 (David Flink)

*   Added fast help tutorial and quick-start instructions when first run.
*   Added code for better debugging of run-time errors by users.

v1.0.2 - January 14, 2007 - Release with 1.06 (David Flink)

*   Fixed problem for running in countries where "," is used as a decimal place

v1.0.1 - October 4, 2006 - Release with v1.06 (David Flink)

*   Fixed save system.
*   Double-click expansion of directories to their contents.
*   By default, generated step files now go into StepMania's songs directory in "My Music".
*   "Bulk Changes to Job List" functionality added.
*   More robust code, e.g. Unicode file names no longer kill the program, they're ignored instead (sorry, can't read them).

v1.0.0, first official release - September 17, 2006 - Release with v1.05 (David Flink)

From v0.10.7 to v1.0.0:
An installer now sets up both programs, desktop icon, etc. Tight integration with Dancing Monkeys, and source for both programs is distributed in the package. Song conversion is now set as a low priority task, so the program can now be run without sucking down all available CPU. You can stop processing a song partway through and restart later. There is now an estimated time for when processing for a song will finish. The beats per minute gets a slight refinement after it is computed. Songs which are reconverted are done much faster, as the beats per minute value computed earlier for each is reused. Numerous bug fixes.

v0.10.7 - August 18, 2006 - Release with v1.04\. (David Flink)

From v0.10.6 to v0.10.7:
Fixed Other bug when viewing log in certain circumstances. Renamed background file from background-bg.jpg to background.jpg. Do not overwrite pre-existing background/banner. Fixed bug that caused Gorilla to crash when minimized. Watched output during processing always at left edge. Stopped job list scrolling when clicking "Redo Job". When loading joblist or returning from early stop, job list is positioned at next to-do job. Stopped songlist from setting current song to top of list when deleting. Forced selected song to remain in the visible part of the songlist when scrolling. Added success and confirm dialog boxes when saving and overwriting, or on exit without save. Corrected handling of "cancel" when saving files.

From v0.10.5 to v0.10.6:
Fixed bug when viewing log in certain circumstances.

From v0.10.4 to v0.10.5:
Abort after current song renamed to Stop after current song. Stop after current song can be canceled with "Don't Stop" button. dm_log.txt needs to grow before assuming DM was successful. dm_log.txt now also scanned for "End Time" before assuming DM was successful. Minor change to (eventually) smooth "Wavy Lines" effect.

From v0.10.3 to v0.10.4:
Added both \bin\win32 and ..\bin\win32 to the DM search path. Changed DM failure detection to parsing dm_log.txt (old method was based on existence of song directory). Include dm_log.txt in "view log". Fixed bug where bad config file would lock almost all buttons on the main page. Fixed compatible verion detection when loading job lists. Fixed bug where "," in any file/directory name would cause Gorilla to think a saved job list was corrupt (without breaking compatability).

From v0.10.2 to v0.10.3:
Added rudimentary error handling when reading files. Prevented failure to copy background and banner files from crashing Gorilla. Prevented failure to copy from SM to DWI from crashing Gorilla.

From v0.10.1 to v0.10.2:
Fixed Tab order on Config page. added "Copy Artwork" to use Windows MediaPlayer artwork as song banner (SM only)

From v0.10.0 to v0.10.1:
"OK&Save" on config screen renamed to a large "OK". Minor screen layout change. All buttons return focus to job list. Changed wording in "wrong version" prompts. Exit button added. "View Log" button added when a song has been processed. Tab order fixed. Detection of compatible .gor files improved. Fixed minor bug where returning from "GO" didn't highlight the current song, but buttons still acted on it.

From v0.9.4b to v0.10.0:
Major code re-write and cleanup. <default> entry removed from song list. Defaults added to configuration screen. Parameters for individual song/directory not shown if it is set to default. Configuration and settings file format changed. Song list font changes to monospace. List maintains songs after processing, showing ok or failed (even if saved). Directories not removed from list when expanded, but flagged ---- Ability to "re-process" files (i.e. remove ok/failed flag). Delete on keypress partially added (Only works on keypad. VB's fault)-: Added buttons to reload defaults from settings.gor, or to reset defaults to "factory" settings. Delve rejects directories that match DM, SM or DWI directories.

v0.9.4beta - July 25, 2006 - Original release with v1.03\. (David Flink)

From v0.9.4a to v0.9.4b:
Configure pannel annotated. Directories for DancingMonkeys, StepMania and DanceWithIntensity auto-detected. <default> settings now won't allow mutually exclusive options. Version of Dancing Monkies auto-detected (Blind accepted v1 not before v1.03)

From v0.9.4 to v0.9.4a:
Change screen layout. Added some Tooltips. Prevent window from becomming too narrower or short.

From v0.9.3 to v0.9.4:
Spelling more bugs in list handling. created installer

From 0.9.2 to v0.9.3:
Fixed bug when returning from busy screen to main pannel Removed rchtxt32.ocx dependancy Added OLE Drag-and-drop to job list. Improved directory selection pannel.

From v0.9.1b to v0.9.2:
Correct defaults restored after job completion/abort. Spelling. DM logs now all named and placed in <DancingMonkeys>\Output. Directories not created for failed stepfile generation. Added icon.

From v0.9.1 to v0.9.1b:
Unexpected directory change fixed.

From v0.9 to v0.9.1:
"Abort" on config page renamed to "Close". Directory processing corrected.

Version v0.9:
First Beta.
