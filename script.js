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
                Looking back on the code, this certainly isn't my best work nor is it \
                my most complicated but I'm \
                still extremely proud of it. It started as something I didn't think \
                I had a chance of completing but now I'll always have my own personal \
                clone of my favorite video game that I got to build.<br><br>\
                Here is a link to the <a href=https://github.com/patrickhunner/Tetris>github repo</a> \
                where you can find information about the project, source code, and instructions \
                on how to run it.";
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
                how it works<br><br> \
                If any employers would like to view the code, please email me at \
                phunner52@gmail.com and I'd be happy to share!";
            break;
        case "drone_sim":
            description.innerHTML = 
                "This was a school project, written in c++ that focused on \
                utilizing different software design patterns to build a simulation \
                that creates objects for drones to transfer around the U of M \
                campus. The main focus of the assignment was utilizing SOLID principles \
                of programming in an AGILE environment. \
                In the simulation, you can create different objects, \
                utilize various search algorithms, select different events to \
                be notified of, and track/analyze object data. Most importantly, \
                another programmer could easily add loads of features on this code \
                base due to the code being written with scalability and reusability \
                in mind. <br><br>\
                I would probably consider this project to be the one I am most proud of \
                and learned the most doing. It exposed me to a few technologies and practices \
                I hadn't previously used (Docker, Google Test, LucidChart, UML, AGILE Scrum) and \
                allowed me to work on a large scale project with a team. \
                Because this is a school assignment, the code must be made private \
                but here is a link to a video of me and my team describing how the \
                system works. Below is also the link to the <a href=https://github.com/patrickhunner/Drone_Sim_ReadMe/blob/main/README.md>README</a> \
                file describing the \
                system and how to use it through a docker link<br><br> \
                If any employers would like to view the code, please email me at \
                phunner52@gmail.com and I'd be happy to share!";
            break;
        case "cot":
            description.innerHTML = 
                "This was a personal project written in python to compile \
                all the Commitment of Traders (COT) data for specified commodities \
                and perform analysis on them. To make my job easier, someone created \
                a Socrata API to retrieve the data which means my program only had to \
                utilize that API, do a few calculations, and then display the data. \
                The project was build to be extendable as you can edit the commodities it \
                looks at and, with minimal coding knowledge, add different columns for \
                analysis. <br><br>\
                Because this was built for a friend, I dockerized the project such that \
                with the correct files stored locally, you can run the program and \
                get the data on your own machine. Here is a link to the <a href=https://github.com/patrickhunner/COT-Data>github repo</a> \
                that contains the dockerfile and instructions on how to run it.";
            break;
        case "web_app":
            description.innerHTML =
                "This was a school project where I created, from scratch, an \
                interactive web app with vanilla javascript, node.js, and MySQL. \
                It also gave me a base understanding of HTML and CSS, skills that \
                I loved working with and hope to continue working on. There are a few \
                pages, mostly based around a scheduling system where you can add, edit \
                and delete events. It has a login system that was never developed to \
                dynamically create new users but securely authenticates previous ones \
                with a hashed password. <br><br>\
                Because this is a school assignment, the code must be made private \
                but here is a link to a video of me navigating the website and \
                describing how it works. <br><br> \
                If any employers would like to view the code, please email me at \
                phunner52@gmail.com and I'd be happy to share!";
            break;
    }
}
