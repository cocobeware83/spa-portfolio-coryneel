import React from 'react'

function Project () {
    const projects = [
        {
           title: "Safe Travels",
           image: "safetravels.png",
           page: "https://cocobeware83.github.io/Safe-Travels/",
           code: "https://github.com/cocobeware83/Safe-Travels"
        },
        {
            title: "Eat Out, Austin",
            image: "eat-out.png",
            page: "https://eat-out-austin.herokuapp.com/",
            code: "https://github.com/DragoonKite/eat-out-austin"
        },
        {
            title: "Photo Port",
            image: "photo-port.png",
            page: "https://cocobeware83.github.io/photo-port/",
            code: "https://github.com/cocobeware83/photo-port"
        },
        {
            title: "Pizza Hunt",
            image: "pizza-hunt.png",
            page: "https://polar-forest-74898.herokuapp.com/",
            code: "https://github.com/cocobeware83/pizza-hunt"
        },
        {
            title: "Work Day Scheduler",
            image: "scheduler.png",
            page: "https://cocobeware83.github.io/work-day-scheduler/",
            code: "https://github.com/cocobeware83/work-day-scheduler"
        },
        {
            title: "Weather Dashboard",
            image: "weather-dash.png",
            page: "https://cocobeware83.github.io/weather-dashboard/",
            code: "https://github.com/cocobeware83/weather-dashboard"
        }
    ];

    return(
        <section>
            <h2> Some of My Projects</h2>
            <div className='d-flex flex-wrap justify-content-center' style={{width: "80%", margin: "auto"}}>
                {projects.map(project => (
                        <div className="card mx-1 bg-primary mb-2 ml-2 mr-2 mt-2" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title text-light">{project.title}</h5>
                            </div>
                            <img className="card-img-top" src={`assets/images/${project.image}`} alt={project.title} key={project.title}/>
                            <div className="card-body">
                                <a href={project.page} target="_blank" rel="noreferrer" className="card-link text-light">Deployed Site</a>
                                <a href={project.code} target="_blank" rel="noreferrer" className="card-link text-light">Github Repository</a>
                            </div>
                        </div>
                ))}
            </div>
        </section>  
    )
}

export default Project;