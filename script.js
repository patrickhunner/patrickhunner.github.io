function switchContent(event) {
    const description = document.getElementById('description');
    switch(event.target.id)
    {
        case "tetris":
            description.innerHTML = 
                "This was my first personal project after learning my \
                first language, python. It is a playable version of Tetris \
                built on pygame where scoring is based on the original BPS \
                system and difficulty increases in piece speed every 10 rows \
                cleared. It isn't a complicated project but it helped me to \
                explore and really spark my love of programming.<br><br>\
                To play the game, use this docker link by putting the following \
                in your terminal";
            break;
        case "web_server":
            description.innerHTML = 
                "This was the culmination of my Operating Systems course \
                where we created a functioning web server in C. It included \
                forking separate processes for each tab, all of which contained \
                a set of pipes to communicate asynchronously with the server, \
                while manually handling locks to allocate control and energy to \
                each process when needed. <br><br>\
                Because this is a school assignment, the code must be made private \
                but here is a link to a video of me using the system and describing \
                how it works.";
            break;
        case "drone_sim":
            description.innerHTML = 
                "This was a school project, written in c++ that focused on \
                utilizing different software design patterns to build a simulation \
                that creates objects for drones to transfer around the U of M \
                campus. In the simulation, you can create different objects, \
                utilize various search algorithms, select different events to \
                be notified of, and track/analyze object data. Most importantly, \
                another programmer could easily add loads of features on this code \
                base due to the code being written with scalability and reusability \
                in mind. <br><br>\
                Because this is a school assignment, the code must be made private \
                but here is a link to a video of me using the system and describing \
                how it works.";
            break;
        case "cot":
            description.innerHTML = 
                "This was a personal project written in python to compile \
                all the Commitment of Traders (COT) data for specified commodities \
                and perform analysis on them. It outputs all the data in xlsx files \
                which the system will create/edit in the directory the program \
                is run. From the weekly analysis it performs, it outputs ";
            break;
    }
}
  