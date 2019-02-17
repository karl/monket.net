---
title: Dancing Monkeys Change Log
author: karl
template: article.pug
---

## Command-Line Control

We recommend using Gorilla, but direct use of Dancing Monkeys itself is available from the command-line. Extensive instructions follow on how to do just this.

For example purposes, say you unzip Dancing Monkeys to the C:\ root directory (the topmost directory). You'll have a directory tree like this:

```
C:\Dancing Monkeys - where Gorilla.exe is located
    \bin
        \win32 – where the program is located, "DancingMonkeys.exe"
    \LAME – this is the free LAME MP3 decoder
        \html – documentation for LAME
    \Output – this is where song step files and output log are placed by default
    \Temp Music – a temporary working directory, where the latest created .WAV file is put
    \toolbox – MATLAB related DLLs, just leave these be
```

To run Dancing Monkeys from the command-line, you want to go to "C:\Dancing Monkeys\bin\win32" and run the DancingMonkeys.exe program there. For Windows pros, you want to create a DOS window, go to this directory, then run the program as follows:

```
    DancingMonkeys [options] input [L S H [output]]
```

Items in []'s are optional. The input file is a full path to an MP3 or WAV file, or a directory, or an M3U playlist. All MP3 and WAV files in the directory and its subdirectories are processed; try the "-t" option before a full run to see what music files will be processed. The "L S H" values you replace with the feet difficulty you want, from 1-9 (not 10). The "output" is the directory where you want to put the results. It is critical to put double-quotes around the filenames. Here is an example of a reasonable way to run the program:

```
    DancingMonkeys -es 3 "C:\temp\My Steps\Barney.mp3" 3 5 8
```

The option "-es 3" tells the program to not create a step file if 3 or more stops are created in the stepfile generated - this is usually a sign that Dancing Monkeys cannot currently convert the song well. If successful, the result will be put in the directory "C:\Dancing Monkeys\Output" in a directory labeled "Barney". Move this directory to your own created subdirectory in StepMania's "Songs" and you're done.

Here's the foolproof step-by-step for beginners, along with more information about what's happening:

1\. Click on the Start button in the lower left of your screen and select "Run...".

2\. In the dialog that pops up type: cmd

3\. A black (DOS) window pops up that says "C:\WINDOWS\System32\cmd.exe" as its title. Select it and type (including the double-quotes):

```
        cd "C:\Dancing Monkeys\bin\win32"
```

4\. You're ready to run the program. Let's say you put the MP3 you want to convert in a directory "C:\temp\My Steps", and it's called "Barney.mp3". You want to convert the song so that it produces feet difficulty ratings of 3, 5, and 8 for light, standard, and heavy. Type:

```
        DancingMonkeys "C:\temp\My Steps\Barney.mp3" 3 5 8
```

5\. Go get a drink and cross your fingers. Processing can take anywhere from a few minutes to a few hours. Typical is 5-15 minutes, but if you run out of physical memory things can get slow. Now and then the program will fail; sometimes it's your fault, sometimes there's nothing you can do. See Common Errors, at the bottom.

6\. Once processing completes successfully, go to the "C:\Dancing Monkeys\Output" directory. You should find a directory named "Barney" for your song there, with the resulting .mp3/.wav file and step files (.sm, .dwi) inside. If you do not find any files, look at the dm_log.txt file in the output directory for what happened. Note that the output .mp3/.wav file is normally a shortened version of your song, it's a maximum of 105 seconds long, and the steps generated go with it. There is an option to change the output song length (e.g. '-l 300'); see the HomePage's options documentation for more details.

7\. Using the file explorer, go to wherever StepMania's "Songs" directory is on your machine, e.g. "C:\Program Files\StepMania\Songs".

8\. Create a new directory in the "Songs" directory, e.g. "My Mix".

9\. Move or copy the new song directory just created in "C:\Dancing Monkeys\Output" (e.g. "Barney") to "C:\Program Files\StepMania\Songs".

10\. Play StepMania. You should see "My Mix" as a new group, and your song in this group. You may need to reload, if they do not: in StepMania, go to Options, then select "Reload Songs/Courses" near the bottom.

Step #4, where you actually run the program, is where bad things most often occur. See the Common Errors area on the [tutorial page](../tutorial/) if something goes wrong.

## Command Line Arguments

What follows are the command-line arguments for Dancing Monkeys.

This same list is available by typing "DancingMonkeys -?" in the command window.

```
Dancing Monkeys version 1.06

usage: DancingMonkeys [options] <infile> [basic medium hard [outdirectory]]

    <infile> is an MP3 or WAV file, a directory, or an M3U playlist.
    [basic medium hard] are values from 1 to 9 for step difficulty.
    [outdirectory] is the results directory. This is .\output by default.
    [options] can actually be placed anywhere in the command line.

Recommended usage: DancingMonkeys -es 3 -x 1 infile

Options:

-i (--important) - Important message mode. No output except for errors
and file processing basics.

-v (--version) - Return version to the screen (only) and exit without
further processing.

-n (--noID3) - Do not attempt to parse the incoming MP3 file ID3 tag for
title and artist. Dancing Monkeys' parser is pretty good, but can
sometimes get tripped up, so avoid this problem by setting this argument.

-oc "text string" (--outputcredit "text string") - Instead of the default
"Dancing Monkeys v1.06" text, put your own text for the CREDIT field in
the .sm steps file.

-onc (--outputnocredit) - Do not include the CREDIT string in the .sm
steps file. Normally this says "Dancing Monkeys v1.06".

-oms (--outputmusicsame) - Use the same music file format when writing a
song, i.e. if a WAV file is read in, a WAV file is output; MP3 gives
MP3\. Normally output files are always MP3's.

-omw (--outputmusicwav) - Always create output music files as WAV's.
This is what v1.01 used by default.

-onl (--outputnolog) - Do not output to a log file.

-ob (--outputBPM) - Output the beats per minute and gap value, but end
processing and output nothing else (no steps files). Useful for people
writing manual steps for a song who want just the beat and gap
calculated.

-t (--test) - Show which music files would be processed, but do no work.
For use when a directory or playlist is used as input, to check input.

-ons (--outputnostops) - Do not output any stops (pauses) in the steps
files. Can be used in conjunction with "-es #"; the number of stops are
detected for purposes of checking for a bad song conversion, but if
good are still not output.

-es # (--errorstops #) - If the number of stops found is > #, then
consider the process unsuccessful and exit. Off by default; 3 is
recommended. When Dancing Monkeys detects many stops, this is usually
a sign that it is failing to find the information it wants for making
steps, so the resulting steps file is (sometimes extremely) poor.

-l # (--length #) - Maximum song length. Songs longer than this value
are truncated, faded out at the end. Default is 105 seconds. WARNING:
currently this feature tends to result in songs with sparse step
patterns, and needs to be fixed.

-f # (--fade #) - How far from the end of the song to start fading out
the music, when the original track is too long. Default is 5 seconds.

-c # (--confidence #) - A confidence level is computed for the beats
per minute value computed. If the confidence is below this level, abort
song creation for this file. Default is 10\. Set to 0 to never abort and
always use the best BPM value found (no matter how poor).

-m # (--measure #) - Number of beats per measure of music. Default is 4.

-b #:# (--BPM #:#) - Give a range to search the song for BPM. Default
is 89:205.

-g # (--gapadjust #) - Gap adjust, in seconds. This value is added to
the gap factor on output. Default is 0\. If songs generated feel like
the steps come slightly before the musical beat, set a positive gap
value, e.g. "-g 0.05".

-x # (--execution #) - Change mode of execution. A value of 1 means to
try refining the BPM as best as possible once a BPM is found.
```
