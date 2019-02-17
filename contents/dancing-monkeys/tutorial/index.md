---
title: Dancing Monkeys Tutorial
author: karl
template: article.pug
---

What follows is a summary of the use of the [Dancing Gorilla](../) program, how to get around various problems, and some easier ways to use the programs. Let me, [Eric](http://erich.realtimerendering.com/), know of any corrections and additions you have.

## Installing and Running

Download the latest version of Dancing Monkeys and Gorilla from the [Dancing Monkeys website](../). [Unzip](http://www.download.com/WinZip/3000-2250_4-10454671.html?tag=lst-0-2) (a.k.a. extract) the file and run the executable inside (e.g. double-click). Follow the installation instructions. If you made a desktop icon for the program, it will be labelled "DancingGorilla". If not, you will find Gorilla.exe in the topmost directory wherever you unpacked Dancing Monkeys.

**Quick Start:** Run Gorilla. Hit "OK" to finish with the Configure screen. Drag and drop MP3 and WAV songs and directories of songs into the white window. Hit "GO" and come back a good long while later (it takes 5-15 minutes to convert each song). Some songs convert, some don't, it's about 50/50\. Start StepMania and you'll see a new collection of step files in "My Music".

**The detailed version:** Run Gorilla. You will get a startup screen the first time you run. It should look something like this:

![Dancing Gorilla Configuration Screenshot](Gorilla1.gif)

Gorilla autodetects where the DancingMonkeys.exe, [StepMania](http://www.stepmania.com), and [Dance With Intensity](http://dwi.ddruk.com/) (if by some chance you still use this) programs are located. Adding these directories allows you to easily save converted songs directly to the desired song directories for these programs.

There are plenty of options to change. You probably want to change step difficulty ratings to suit your tastes, e.g. 7-8-9 if you want them hard, 1-2-3 for dead easy. There are many other options you can set to control how Dancing Monkeys itself processes your songs; see the Options section below.

When you're done setting options press "**OK**". You'll then see this screen (which will now be the normal startup screen for Gorilla):

![Image:Gorilla2.gif](Gorilla2.gif)

Find one or more .MP3 or .WAV files you want to convert to steps. You can do this by finding the songs themselves or the directories, using the "Add Song" and "Add Directory" buttons, or pushing "Alt-S" or "Alt-D", respectively. Better yet, you can drag and drop songs or directories directly from Windows Explorer into the top window of Dancing Gorilla to add them to the processing list. After doing this you should get something like the following:

![Image:Gorilla3.gif](Gorilla3.gif)

**We highly recommend saving any long song list you set up before running.** The "Save/Load Job List" feature is for saving any long song list you've created and want to process. Gorilla and DancingMonkeys are not fool-proof, and bad data can cause either program to halt or hang. By saving a job list before processing a major job, you can reload the job list and run again. You can delete the songs already processed - other than the "Delete" button, the "Delete" key also works, and better yet "Alt-E" also deletes and repeats if held down. Also, if you process part of a song list, interrupt, and then save the job list, when you reload (or even if you don't exit) Gorilla won't process songs already converted (unless you click "Redo" or use the "Bulk Changes" feature). You can also drop saved song lists into Gorilla, just like you can with songs and directories.

Simply hit "**GO**" and processing will begin. A processing window will appear and you can watch execution of Dancing Monkeys itself.

![Image:Gorilla4.gif](Gorilla4.gif)

Note that you can resize this window to see text going off the right edge. Gorilla calls the Dancing Monkeys program song by song. The songs are output to the desired output directory, one song per subdirectory.

"FAILED" means that Dancing Monkeys could not convert the song for some reason: it couldn't find the beats per minute reliably (often because the bass line is weak or the song itself has an irregular beat), or there were too many quiet parts to the song. Usually it's best to just move on; there are millions of songs out there, about half won't convert, and perhaps 20% of those that do convert are actually fun to dance. That said, the sections that follow give some tips if you're dying to get something out of the program for a particular song.

## Options

If you want to be a power user, you can drop a song, directory, or job list (.gor file) on the Dancing Gorilla icon on the desktop to instantly launch the program and start processing.

### Configuration Options

You can change song length, what range of beats per minute to search, and much else. You can hold your mouse pointer over each of these to get a little information from a tooltip.

By default, the output step files are put directly into the proper spot with the option "Automatically add to StepMania Collection", which appears if you've set where you installed StepMania. You can type into the "Collection" box whatever you want to call your dance collection. The proper directories are then created in your StepMania distribution. Specifically, in the Songs subdirectory a new directory called "My Music", or whatever you've name it, will be filled with your converted songs.

There are many other options that can be used in Gorilla to modify how Dancing Monkeys behaves. See the [command line page](/dancing-monkeys-v2/Command_Line "Command Line") for even more information. Some noteworthy ones:

**Directory to collection** - checking this will use the directory name of the songs you want to convert and create collections with that same name. So, for example, if you had add a directory called "Mambo Madness" and another called "Blood Metal" to be processed, two separate song collections with these names will be created in the StepMania Songs directory. Alternately, you can uncheck the "Automatically add..." option and specify a particular directory yourself.

**Delve into subdirectories** - on by default, this option makes the program look in all directories underneath the given directory, searching for .mp3 and .wav files. Using this option you can convert all a band's albums at once (do this before going to bed), or even your entire music collection (plan on going on a vacation after hitting "Go"). If turned off, only the songs directly inside a directory listed will be processed.

**Copy Artwork** - on by default, this takes whatever artwork the Windows Media Player has put into the directory and copies it to the banner and background images for the step file generated. Uncheck to disable this feature. Note that this is a Gorilla-only feature, not one controlled by Dancing Monkeys itself.

**Turbo** - is useful if you try variants on the same song. Once a song is run once and successfully converted, if you convert this same song again then the "beats per minute" (BPM) value will be read from the log file of the previous run. Since the BPM is the thing DancingMonkeys takes most of its time figuring out, converting a song a second time will then be much faster by bypassing this step. If you really want to compute the BPM from scratch for the song (because you've changed the BPM range), turn off this option.

**No Stops** - checking this box removes all stops from a song. Some people like stops (where, suddenly, the notes stop moving for a few beats), some people don't, this controls it.

**Max Stops** - when quiet areas of the music are found (where there are not strong enough notes to add steps), the program will put a stop. Sometimes songs will have an excessive number of stops, which almost always means the step file generated would be undanceable. Setting "Max Stops" to 3 means that if 3 or more stops are found inside a song, do not generate a step file. This option works along with "No Stops": if you check "No Stops", the number of stops found is still used to determine whether to create a step file or not; if created, the step file will include none of the stops.

**Length** - make the maximum song length some number of seconds. By default the song fades out for 5 seconds after 100 seconds. You can set this higher for a longer step file. That said, the downside of this option is (a) processing can take much more memory and be much longer and (b) you may learn why it's nice to have the song fade out after 100 seconds. Dancing the same chorus of a song again and again is less interesting than you might think.

**Beats Per Minute** - one complaint about Dancing Monkeys is the lack of sixteenth notes. By looking for the beats per minute in a faster range, you will get the equivalent of sixteenth notes.

**Confidence** - by setting the confidence to 0, you can force a song to create a step file, no matter how poor beat detection was. Sometimes the BPM found may in fact be fine, and by setting the confidence level down you might get a reasonable step file nonetheless. Often you'll still get excessive pauses, however.

### Run Options

A log of each song's conversion are put in "dm_log.txt" in the output directory by Dancing Monkeys, and Gorilla generates its own .log files, too. Some songs will fail to convert; see "Common Problems and Errors" further on down for more information. You can look at the logs for any file by clicking the "View Log" button. Better yet, while on this screen you can click on any song that has been processed and select "View Log".

You can abort a run by pushing the "Stop After Current Song" button, then waiting for processing on the current song to end. Songs left to process are then shown on the main screen. If you don't want to wait, just use "Stop Processing Now".

If you want to set options specifically for one song, before hitting "GO" push the "Customize this song" button; to change options for all songs, use "Configure". Oh, and one more tip: if you double-click on a directory you put in the list, it'll expand into its subdirectories and songs. You can then delete any you don't want to attempt to convert. The "Bulk Changes to Job List" function can also help you manage the list of songs, before and after runs - click it for lots of help.

## Common Problems and Errors

Here are some of the many ways things can go wrong when running Dancing Monkeys:

*   **Gorilla won't run for me.** Read ahead and see if something matches your problem. If not, please tell [Eric](http://erich.realtimerendering.com/), the more information about what you tried to do and how it failed, the better: what exactly doesn't work, what operating system do you have, what language you use and what country you are in (this often matters a lot).
*   **I get "Run-time Error '53': File not found".** Turn off FastScan: click the Configure button, uncheck the FastScan box, then hit OK.
    *   **I'm on Vista 64 bits** You need to run as an administrator. Vista-64 treats the bpmdetect and DancingMonkeys output files differently to Gorilla's files and puts them in a hidden "compatability" section.
*   **I still get an "error 53" when starting Gorilla. Your previous fixes did not help.** Do you have the latest version? Uninstalling and reinstalling has been known to fix this problem.
*   **I try to process MP3's, but they all immediately fail.** If you're on Vista, you need to run as an administrator. Also, make sure they're MP3's (sometimes the suffix says MP3 but it's not); try some MP3's from other albums.
*   **I get an "error 62" when I try to convert a song.** If your region uses "," as a decimal point (i.e. you would write "1,06" instead of "1.06"), try changing your standards and formats to English (United States or United Kingdom). Go to the Control Panel and select Regional and Language Options and pick one of these for "Standards and Formats". We are working to correct this problem.
*   **I get a "Critical Error Initialize; 3" error on startup.** Try deleting the "settings.gor" file that exists in your install folder and running again.
*   **I get an "error 13" when starting Gorilla.** Try deleting the "settings.gor" file that exists in your install folder and running again. If that doesn't work, you might have to load a previous version of Gorilla and Dancing Monkeys.
*   **I added songs, Gorilla popped up a "Busy" dialog for an instant, but nothing happened.** Go to your output directory. You should see a file dm_log.txt. Open it up and see if there's some obvious error.
*   **DancingMonkeys dies for some weird reason.** One common problem is a bad suffix on your song file. Sometimes .wav files or .m4a files get labelled ".mp3", and DancingMonkeys will trust that the data really is what it says it is. Check your song to make sure it's really the right suffix. Programs such as iTunes allow you to convert a file to MP3, for example (select the song, right-click on it, and choose "convert to MP3").
*   **lame.exe has stopped working.** Usually this means the MP3 is a bit funky in some way; sorry, we can't read it. If you desperately want to convert this song, try reading it into [Audacity](http://audacity.sourceforge.net/download/) and writing out a clean MP3.
*   **ERROR: The data abscissae should be distinct.** Again, your MP3 is encoded in some odd way. Reading in and writing out from [Audacity](http://audacity.sourceforge.net/download/) definitely fixes the problem.
*   **Gorilla crashed, and now my system is slow.** Report the problem (and any error codes, etc.) to [David](mailto:DancingGorilla@gmail.com). What might be happening at this point is that, not only has Gorilla stopped, but Dancing Monkeys itself is still processing some song file. The simple answer is to wait 15 minutes and let Dancing Monkeys finish. If you know what you're doing, you can press control-alt-delete, go to the Processes tab, and end the DancingMonkeys.exe process.
*   **My songs are in the right directory, but StepMania won't use them, or plays the wrong music.** First make sure your songs are truly in the right directory, i.e. in a subdirectory of StepMania\Songs, e.g. "StepMania\Songs\My Mix", each song being its own subdirectory. If this is OK, when you start up StepMania, go to Options and select the next-to-last option, "Reload Songs/Courses".
*   **I have .m4a (or other format) encoded songs, what can I do?** We recommend converting these to .mp3s. This was once easily done in iTunes: select the songs, right-click on the collection, and choosing "convert to MP3". They've removed this option, so you'll have to find a program that converts to MP3.
*   **I asked for 9 steps difficulty, but got less.** The program does its best to find strong enough beats to use to add steps, but it won't just add random steps to get to its 9-step "quota". So after steps are assigned, the song is checked for step density and the number of feet adjusted accordingly. Also see the next question's answer.
*   **The beat is just too slow.** The default range of beats searched, 89 to 205, is sometimes too low for experienced dancers. Try raising this to something higher, e.g. 110 to 240 (or higher), and the steps may get more interesting and challenging.
*   **I tried to make a 5 minute dance file and the program seems to hang.** Yes, anything longer than about 2-3 minutes tends to take a very long time, if not just run out of memory and be impossible to convert. Huge arrays get used inside the program which gobble down memory. There's not a lot you can do, short of buying more memory (which does help). You might try limiting the BPM range when processing the song. That is, make a step file that plays for 2 minutes, read the BPM found (say 110), and search near only that range when making the longer step file (say 100-120).
*   **The step file produced stinks!** Hey, anything free comes with no guarantee. There are a number of ways where Dancing Monkeys can currently go wrong:
    *   The bass line is not strong enough. The program keys in on the bass line and puts beats to it. Some bands don't have a strong bass line, so the steps you get are a bit random. Similarly, the steps often won't follow the rhythm of the words sung by a singer, especially a higher-pitched female singer (example: the song "Respect").
    *   The program has a certain repetitive air to it at times. If it finds a pattern, it uses that pattern again and again without much variation. This can be both good and bad.
    *   There's not a lot of creativity to the types of steps used. Beats and half-beats are used so things like skips are not done, and hold arrows and series of jumps are usually rare. Come help us develop the program!
    *   The song itself is just not that danceable, DDR-style. A song may be enjoyable to hear, but there might not be enough variation in it to make a good DDR challenge.
*   **I have album art, but Dancing Monkeys doesn't put it in the step file like advertised.** If there is album art in the .MP3 itself or in the song's directory (where Windows Media Player puts it), this art will be copied over. However, iTunes 7 puts the album art [far away in another directory](http://www.tuaw.com/2006/09/14/itunes-7-cover-art-tidbits/#comments), and so Dancing Monkeys currently cannot find it. You can always add album art yourself, see "Album Art" below for details.
*   **I'm on Windows 7, does the program run?** Like Vista, you need to run as an administrator for the program to work. Right-click on the program icon and go to Properties->Compatibility and set "run as administrator". You can't drag-and-drop songs to the "white area" under Windows 7, unfortunately (though you can drag-and-drop to the program icon).

Personally, I find about half of all songs will convert to some sort of step file, and of these maybe one in five of these are truly worth keeping. So of your 2000 song collection only 200 songs will be worth dancing, i.e. as many as just about all of the DDR release songs combined. Not a bad deal. And you can always use a program like [Stependous](http://stependous.sourceforge.net) or the StepMania editor itself to improve various parts of the step file by hand.

## Editing StepMania Step Files by Hand

One flaw of Dancing Monkeys is that, for .WAV files and some .MP3 files (those without ID3 tags), it doesn't set the artist's name for the dance routine. Another problem is that there are sometimes music pauses which are awkward. Happily, both problems are easily cured with a text editor (e.g. Notepad). Dancing Monkeys produces two step files, Dance With Intensity (.dwi) files and StepMania (.sm) files. The .dwi (Dancing With Intensity) file format is somewhat defunct, but StepMania can read it and other editor programs (e.g. [Stependous](http://stependous.sourceforge.net)) use it for input. Normally, though, you'll want to edit the StepMania steps.sm file. This type of file will look something like this at the top:

```
#TITLE:03 Booker Tease;
#ARTIST:The Dancing Monkeys Project;
#OFFSET:-0.699320;
#BPMS:0=145.280843;
#MUSIC:03 Booker Tease.wav;
#STOPS:27.000000=1.651973;
```

Most of the fields are pretty obvious. Say I want the file to have a nicer title, getting rid of the "03" track number. I also want to put in the artist's name, and I want to get rid of the stop found in the music. Here's the edited header:

```
#TITLE:Booker Tease;
#ARTIST:The Residents;
#OFFSET:-0.699320;
#BPMS:0=145.280843;
#MUSIC:03 Booker Tease.wav;
```

So all I did was edit the first two lines and delete the "#STOPS" line (by the way, excessive stops pretty much means Dancing Monkeys failed to latch onto the tune for large parts of the song). There are plenty of other fields you could add to the header, see the documentation on the [StepMania](http://www.stepmania.com/wiki/The_.SM_file_format) site.

You can obviously continue on from there, adding and changing arrows, etc. In fact, most manual step creators agree: Dancing Monkeys does excellent beat detection and gap offset computations (when it can find the beat). Computation of these two numbers can save an author hours of manual search, so even if you hate the resulting steps of Dancing Monkeys, you can always just use the resulting step file as a starting point.

## Album Art

Dancing Monkeys and Gorilla attempt to find and save album art inside the MP3 file itself or the directory and store it with your step file. Note that [iTunes 7 album art](http://www.tuaw.com/2006/09/14/itunes-7-cover-art-tidbits) is not currently supported. If you want to put album art with your step files, find an image you want to use for the song, e.g. visit Amazon. Then just copy the PNG or JPEG file to where the step file is located and change the name to "banner.png" or "banner.jpg". This will show album art for when the song is selected. You can copy this image file and rename it "background.png" or "background.jpg", which will then also show the album cover at the start and end of the song itself. See the [StepMania site](http://www.stepmania.com/wiki/Song_Banners_and_Backgrounds) for more information.

## Other Ways of Running Dancing Monkeys

If for some reason you don't want to use Dancing Gorilla, there are (at least) three other ways of running Dancing Monkeys:

*   Desktop shortcut, run Dancing Monkeys directly from the desktop without pain.
*   [Icywindow's Front-end](http://www.freewebs.com/icywindow/dmfe.htm), a Windows program that avoids using DOS
*   [Mark Ransom's Front-end](http://home.comcast.net/~markransom/), another Windows program; allows batching

The Gorilla program is more full-featured than these last two front-ends, which were designed for the simpler v1.01 version of Dancing Monkeys. We mention them for informational purposes, as you may see them mentioned on forums. The desktop shortcut method of running Dancing Monkeys still has its uses, so we describe it here. If Gorilla absolutely does not work for you, consider using this method instead.

### Alternate Method: Desktop Shortcut

You cannot simply double-click on the DancingMonkeys.exe file and have it run. But you _can_ set this up to work by a few simple steps. You do have to have a little understanding of the file explorer. Here it is, step by step:

1\. Find your DancingMonkeys.exe file using the file explorer. Say it's in "C:\Dancing Monkeys\bin\win32\DancingMonkeys.exe".

2\. Right-click on this file, hold down, and drag the program to the desktop. Select "Create Shortcuts Here" after you let the mouse up.

3\. There is now a "Shortcut to DancingMonkeys.exe" icon on your desktop. You can rename this if you wish, by right-clicking and selecting "Rename".

4\. Right-click on the icon and select "Properties", at the bottom of the list.

5\. Select the "Shortcut" tab at the top of the Properties dialog, if not already selected.

6\. In "Target:", add any options, the input directory, etc., as if you were typing from the command line. For example:

<pre>"C:\Dancing Monkeys\bin\win32\DancingMonkeys.exe" -es 3 "c:\temp\Input Music" 5 7 9 "C:\Program Files\StepMania\Songs\My Mix"
</pre>

7\. You could also choose a new icon, by clicking the "Change Icon..." button at the bottom of the dialog.

8\. Hit "OK".

Now all you need to do to process songs is to copy them into the input directory, "c:\temp\Input Music" in the example above, double-click the icon to run the program, and find the results in "C:\Program Files\StepMania\Songs\My Mix". Note that you could set up multiple shortcuts to the DancingMonkeys.exe program, renaming each as desired and each with its own command line options. See the [command line page](/dancing-monkeys-v2/Command_Line "Command Line") for information on the options.

**Pros:** Set up the command line just once and never use DOS again; can use any options desired, including the '-t' test option. Unlike Gorilla, if running the program this way crashes, it does not leave Dancing Monkeys continuing to run. You can also abort a run more directly.

**Cons:** You lose the great Gorilla interface; some savvyness with Windows is needed; you must manually move files to the input and possibly from the output directory.

## Runtime Errors

The rest of what follows is for people who examine the logs and for hardcore, old-school users who don't want to use the Dancing Gorilla front-end control program. These are errors that can be produced by Dancing Monkeys itself, and may be seen in the dm_log.txt file generated in the output directory. Some of this information is from the extensive [DDR Freak thread](http://www.ddrfreak.com/phpBB2/viewtopic.php?t=76391&postdays=0&postorder=asc&start=0), along with the results of my own explorations. If you run into something not on this list, please let [Eric](http://erich.realtimerendering.com/) know.

**FAILURE: Unable to confidently find BPM, so steps not created.** You're out of luck, mostly. You appear to be listening to music either not made by a synth machine or perhaps without a bass line. The music made using instruments often does not have a rock-steady beats per minute, or sometimes the music actually changes in its beats per minute. If you're dying to dance to a piece of the tune, you could edit the music file itself down. People have successfully removed the first few seconds of a song and gotten Dancing Monkeys to work properly. You can also lower the confidence with the '-c 0' option, but what often will then happen is that Dancing Monkeys will end up adding an excessive number of pauses to the steps files output instead. The ultimate solution is to improve Dancing Monkeys.

**FAILURE: 5 stops found, above stop maximum of 3, so steps not created.** Sometimes songs will have an excessive number of stops, which almost always means the step file generated would be undanceable. Go read about the "No Stops" and "Max Stops" options earlier on this page for how to adjust this threshold.

You normally won't run into the following errors with Dancing Gorilla, they are more likely when runnig Dancing Monkeys itself from the command line:

**ERROR: Too many arguments in command line.** You need to put double-quotes around your input and output file/directory names.

**ERROR: Unable to find LAME mp3 decoder.** You must run Dancing Monkeys from its "bin\win32" location. That is, you must change to this directory (see step #3 above) and then run it from there. Don't try to run it from the desktop or the Run command line. You also need to have the full distribution, that includes the LAME MP3 encoder/decoder in the proper place.

**Error: Expected a variable, function, or constant, found "]".**
**ERROR: Unable to find music file.**
**WARNING: Unable to Output truncated version of song. Please copy original to output directory.**
**ERROR: Invalid fid.**
You get a "FID" warning or error of any sort. These sorts of errors are caused by a bad input file name or output directory. For input and output, you need to put double-quotes ("") around the name. For output, the parent directory must exist and be writable; the output directory itself will be created if it does not already exist. You can also try omitting the output directory altogether, in which case the output goes to the default "Output" directory in the Dancing Monkeys area.

**ERROR: A memory allocation request failed.** You've run out of virtual memory. One quick fix is to try a reboot and then run the program again; your system may have lost memory to other applications, and rebooting will clean up. Dancing Monkeys is a huge memory hog, it likes a gigabyte but is often happier with more. Also, buying more physical memory is a way to also possibly speed things up. Using virtual memory and hitting the disk swap file slows processing down considerably. Anyway, here's how to get more virtual memory in Windows XP, from [PedanticOmbudsman's post](http://www.ddrfreak.com/phpBB2/viewtopic.php?t=76391&postdays=0&postorder=asc&start=319 "http://www.ddrfreak.com/phpBB2/viewtopic.php?t=76391&postdays=0&postorder=asc&start=319"):

1\. Right click on the "My Computer" icon on the desktop and click "Properties", or enter the Control Panel and go to System.

2\. In the System properties window that opens, Click on the Advanced tab.

3\. Click on the Settings button next to Performance.

4\. In the new window that opens, click on the Advanced tab.

5\. Next to Virtual Memory, click the Change button.

6\. In the Virtual Memory window, click Custom Size, and set both numbers to 1024MB, then click Set.

7\. Click Okay on all the windows you opened, and reboot the computer if prompted.

You'll now have 1GB of virtual memory, which should be more than enough to make Dancing Monkeys happy. Half a gigabyte would probably be enough, but if you want to guarantee that the program won't crash from lack of memory, 1GB will definitely do it. It seems to use vastly different amounts of memory based on what song you give it, so there's really no way to predict how much it will need. Finally, if you're processing a long song and set the program to output a full-length step file for it, you might just be out of luck, period. Personally, I've tried to process an 8 minute song and always run out of memory, even with 1.6 GB free.

**ERROR: Error decoding music.**
**ERROR: conversion of MP3 to WAV failed.**
**Error: sample frequency has changed in MP3 file - not supported**
[Cyan Garamonde writes](http://www.ddrfreak.com/phpBB2/viewtopic.php?t=76391&postdays=0&postorder=asc&start=196): Open up your original mp3 in something like [Audacity](http://audacity.sourceforge.net/) (which is free) or [GoldWave](http://www.goldwave.com/), then without making any changes to it, save it as a brand new mp3\. DM has trouble decoding mp3's with variable bitrates, so if you resave the mp3, it should get a steady bitrate that won't make DM crap out.

**NOTE:** For all of the following errors, Cyan's advice of reading in your music file and writing it out again could be helpful.

**ERROR: Index exceeds matrix dimensions.** Some weird glitch. In the output you'll typically see something like this: Frame# 4999/4987 128 kbps MS. However, notice how in this example the first number is greater than the second – this should never happen.

**ERROR: Subscript indices must either be real positive integers or logicals.** No idea, sounds like an internal defect of some sort. If you see this sort of error, please send any additional information (code file name, e.g. "DancingMonkeys.m", and line number) to EricHaines.

**ERROR: Error reading PCM file format.** The program can't read your .WAV file for some reason.

**The instruction at "0x0044cb13" referenced memory at "0x00000008". The memory could not be "read".** This happens when the LAME MP3 decoder attempts to read in a file with an .mp3 suffix that's actually not an MP3 file. Check your music file to make sure it's really an MP3 and not a WAV, M4A, or something else.

**LAME dies and has errors such as "Frame# 1/1935 256 kbps L R ibitstream problem: resyncing..."** This often means that there is a large image embedded in the MP3 itself (i.e. album art), as can be done using iTunes. The technical problem is that iTunes and LAME seem to have slightly different ideas of how the ID3 tags at the front of the MP3 are checked for their size. The easiest fix is to remove the album art from the MP3 itself: right click on the song in iTunes, "Get Info", choose the "Artwork" tab, click on the image, and "Delete".

**ERROR: Sorry. No help in figuring out the problem . . .** Best error message ever. Sorry, no help from me either, at this point. Send [Eric](http://erich.realtimerendering.com/) the file and line number information, as well as the dm_log.txt in your output directory.

Amazing the thing runs at all! But really, 99% of the time you'll never see these errors (except the dreaded BPM error) if you avoid the output directory, put double-quotes around the input file, and run from the bin\win32 directory.

If all else fails, **[email Eric](http://erich.realtimerendering.com/)**.
