---
title: Dancing Monkeys
author: karl
template: article.jade
---

## Automatically Generate step files for Stepmania

Dancing Monkeys was [Karl O'Keeffe's](http://www.karlokeeffe.com) individual project while at Imperial College London. It is an application to automatically generate step files for DDR (Dance Dance Revolution) simulators, such as [StepMania](http://www.stepmania.com). It analyzes the music it is given to determine when and where to place arrows. [Eric Haines](http://erich.realtimerendering.com/) has taken up development of Dancing Monkeys, and [David Flink](mailto:DancingGorilla@gmail.com) has created a friendly front-end called Gorilla.

![Feet.png](Feet.png)

## Quick Install

Download the latest version below and install, then run DancingGorilla on the desktop (or Gorilla.exe, in the topmost directory). It will show you how things are configured, i.e., where it thinks DancingMonkeys.exe, StepMania, and Dance With Intensity (rarely used nowadays) is installed. It will also show you the default options for running the program.

Hit "OK" when done. Once you get to the next screen, you can add song files (.WAV and .MP3) and directories using the buttons or simply dragging and dropping from the file explorer. Press "Go" and wait awhile. Song step files are put in the "My Music" song collection in Stepmania, ready to play. See [the tutorial](tutorial/) for further information.

## Download Latest Version

**[Dancing Monkeys 1.06 and Gorilla 1.1.4](DancingGorilla-1.1.4-1.06.zip)** (ZIP 7.0MB)

See the [Change Log](change-log/) for the code history and new features.

### Previous Major Versions

*   [Dancing Monkeys 1.06 and Gorilla 1.1.3](DancingGorilla-1.1.3-1.06.zip) (ZIP 7.0MB)
*   [Dancing Monkeys 1.06 and Gorilla 1.0.2](DancingGorilla-1.0.2-1.06.zip) (ZIP 7.0MB)
*   [Dancing Monkeys 1.06 and Gorilla 1.0.1](DancingGorilla-1.0.1-1.06.zip) (ZIP 7.0MB)
*   [Monkeys 1.04.rar Dancing Monkeys 1.04 and Gorilla 0.10.7](Dancing Monkeys 1.04.rar) (RAR 7.0MB)
*   [1.03.exe.zip Dancing Monkeys 1.03 executable only](DancingMonkeys 1.03.exe.zip) (ZIP 115KB)
*   [Monkeys 1.01.zip Dancing Monkeys 1.01](Dancing Monkeys 1.01.zip) (ZIP 9.0MB) (command line only)
*   [Monkeys 1.0.zip Dancing Monkeys 1.0](Dancing Monkeys 1.0.zip) (ZIP 8.9MB) (command line only)

The source code for Dancing Monkeys and Gorilla are included in this installation. If you have MatLab, you might want to use the native MatLab code for Dancing Monkeys, found in the "Source" subdirectory of the installation, as it is much faster (about 3 times faster). See the bottom of this page for how to run the code under MatLab. That said, Gorilla has many useful features DancingMonkeys does not.

### File Extractors

Use [WinZip](http://www.winzip.com/downwzeval.htm) to extract ZIP files, and [WinRAR](http://www.rarlab.com/download.htm) for the older RAR files, if need be.

## [Tutorial and Troubleshooting](tutorial/)

Check out [the tutorial](tutorial/) for comprehensive instructions on using Gorilla and Dancing Monkeys. This page also explains many common problems and errors.

### Support

[The tutorial](tutorial/) has a section about errors and their solutions, so please check there first. [Eric](http://erich.realtimerendering.com/) has taken up development of Dancing Monkeys, creating the new 1.02 through 1.06 versions. [David](mailto:DancingGorilla@gmail.com) developed the front-end program Gorilla. Contact them for problems with the programs. [Karl O'Keeffe](http://www.karlokeeffe.com) wrote the original Dancing Monkeys and maintains this website.

## Sample Files

You can download [free step files for 18 songs](http://www.mediafire.com/?czwndzk5jil) from the [Diesel:U:Music 2006 competition](http://www.diesel-u-music.com/index.cfm?page=1088). Just unzip the file into your StepMania\Songs directory. All step files were created by Dancing Monkeys; my favorite is group_inou's "BPA". These tracks are free to redistribute and remix, for noncommercial use, under the [Creative Commons license](http://creativecommons.org/licenses/by-nc/2.5/). If the [download link](http://www.mediafire.com/?czwndzk5jil) does not work for you, try using Internet Explorer (I had problems using Firefox). An alternate download site is from [RapidShare](http://rapidshare.com/files/8406027/Diesel_2006.zip.html), though they have queues, etc. Enjoy!

## Command Line Control

You can run Dancing Monkeys directly from the command line instead of using Gorilla. See the [Command Line](command-line/) page.

## Changes

Dancing Monkeys 1.02 through 1.06 were written by [Eric Haines](http://erich.realtimerendering.com/) and contains a number of improvements:

*   Directories and M3U playlists can also be used as input. All songs in all subdirectories are processed.
*   MP3 artist and title information is read in and saved in the generated step file.
*   iTunes MP3 embedded images are extracted as banner and background images for the step files (v1.04).
*   Input MP3's are converted to MP3's on output.
*   Creation of song file and directory occurs only if successful - no more partial results.
*   The number of steps is scaled to the length of the song (in v1.01, long songs would get fewer steps per measure). Thanks to Ornlu for this change.
*   A large number of options are now controllable, including the number of stops acceptable, the beats per minute search range, the number of beats per bar, maximum song length, etc. See the documentation above.
*   Lower memory requirements (and so, for many machines, faster processing). Nothing fancy here, just freeing large arrays when no longer used. You can still run out of memory - I recommend rebooting and trying again.
*   Once a BPM rate is found, nearby frequencies can be examined to see if they are a closer match, using "-x 1".

There are plenty of features still to improve and add, including (from easiest to hardest):

*   Control of inclusion/deletion of stops, freezes, mines, jumps, and "hand" steps (3 or more "feet" per step).
*   Trying other filter techniques if confidence of BPM found is low.
*   Better freeze arrow generation.
*   Generation of 16th notes.
*   Solo/Double step generation.
*   Multiple BPM identification in a single song.
*   Better steps in general, e.g. avoidance of things like 6 left arrows in a row, 4 times in a song, better flow, more variation, etc.

If you have more to add to the list, or better yet want to help with MATLAB development, [let Eric Haines know](http://erich.realtimerendering.com/).

## More Information

See the [Change Log](/dancing-monkeys-v2/Change_Log) for the code history.

Check out this [DDRFreak Forums thread](http://www.ddrfreak.com/phpBB2/viewtopic.php?t=76391) for more information on running Dancing Monkeys. It's a little long but there are some useful nuggets of information in there (mainly relating to the old versions).

## Project Report

Copies of the final report for the project are available in PDF and DOC formats.

*   [Final Report (PDF)](DancingMonkeys.pdf)
*   [Final Report (DOC)](DancingMonkeys.doc)

## Code

The full source for the project is included in the latest executable version of Dancing Monkeys and Gorilla - see the top of this page to download it. You'll find the code in "...\DancingGorilla\Source". Dancing Monkeys requires MATLAB in order to run, Gorilla uses Visual Basic.

If you want to run the Matlab code, you should do the following:

1.  Install the latest version.
2.  Copy the Dancing Monkey MATLAB source code from DancingGorilla\Source into the DancingGorilla\bin\win32 directory.
3.  Run the MATLAB source code from bin\win32\. Now all the directories you need are in the right places, and the additional executable you need (lame.exe and friends) are available. Typical command window input:

```
DancingMonkeys( '-es','3','C:\MyMusic\UCant.mp3','3','5','9')
```

To compile a new stand-alone executable, use "mcc -m DancingMonkeys.m" in MATLAB 6.5\. Newer versions of MATLAB will also work, but the installer needed to run your stand-alone executable (MCRInstaller.exe) on other machines will be around 122 megabytes!

Older distributions of Dancing Monkeys:

*   [Dancing Monkeys Matlab Code 1.04](Dancing%20Monkeys%20Matlab%20Code%201.04.zip)
*   [Dancing Monkeys Matlab Code 1.0](Dancing%20Monkeys%20Matlab%20Code%201.0.zip)

## Copyright/License

### Source Code and Report

The Dancing Monkeys MatLab Code 1.0 and report are [Public Domain](http://creativecommons.org/licenses/publicdomain/).

![norights-a.gif](http://creativecommons.org/images/public/norights-a.gif)

The Dancing Monkeys MatLab Code 1.02 through 1.06 is copyright [Eric](http://erich.realtimerendering.com/), and this source is free to modify and redistribute, with attribution: see [CC license](http://creativecommons.org/licenses/by/2.5/). The Gorilla VB Code 1.0.0-present is copyright [David](mailto:DancingGorilla@gmail.com), and this source is distributed under the [GPL](http://www.gnu.org/copyleft/gpl.html).

### Compiled Application

The compiled Dancing Monkeys application uses MatLab runtime files which are covered by the [MatLab license](http://www.mathworks.com/license).

## Acknowledgements

Thanks to "Shelly Brown" and other beta testers for their help in getting Dancing Monkeys and Gorilla up to snuff.
