Welcome to the Fisherprace™ 'Thingamabob' repository

This is my portfolio project.
I'm building an educational sequencer for kids under 12y/o that can be used by schoolteachers.

HOW TO PLAY WITH IT:
Press the Tape-recorder to play/stop audio.

    Patternmaker (sequencer)
        You can click the blocks and create a new pattern.
        Due to the target audience is 'schoolkids under 11y/o' the pattern is just 8th notes and just 1 bar long.
        The current state is stored in Redux.

    Sound Selector
        Let's you choose between 4 different 'Soundsets' of 2 drumsounds.

    Recorder
        If play-status is 'playing' the 'Start Recording-button' becomes visible.
        When pressed you'll see a Stop Recording-button.
        When pressed you will receive a 'blob of audio' that you can save to your computer.

    Save Pattern
        Choose the color of your pattern and name it.
        When saved it is stored in Redux.

    Pattern Selector
        Switch between patterns, while keeping in time.
        Start with a new empty pattern.

    Press the Left Speaker
        Show/Hide Delay Effect slider

    Press the Right Speaker
      Show/Hide Filter Effect slider

What is next?
Create a back-end for teacher to create a class and give students the option to save their patterns to the database instead of Redux.
