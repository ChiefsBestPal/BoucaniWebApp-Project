import {useEffect,useState} from "react";
import "../PostAJob/JobPostingForm.css";
import CoreUICard from "../../components/CoreUICard";
import JobPostCard from "../../components/JobPostCard";

function ViewJobPosts (props)   {
    let [data,setData] = useState([{}]);
    useEffect(() => {
        fetch("/getjob?mapAsFields=true").then(
            response => response.json()
        ).then(
            data => {
                setData(data);
                console.log(data);
            }
        )
    },[])
    return (
        <div className="post-comment-container">
            <header className="Debug-header">
                <h1> JobPost CRUD Debug Ozan Branch Migrating From Antoine COmmentPostBranch </h1>
            </header>
            <h1>Job Posts</h1>
            <div className="job-posts">
                {typeof data.id === 'undefined' ? <p>Loading... (Don't forget to launch the API/backend server!)</p> : data.id.map((id, i) => (
                        <JobPostCard
                            key={i}
                            jobtype={data.jobtype[i]}
                            title={data.title[i]}
                            location={data.location[i]}
                            salary={data.salary[i]}
                            description={data.description[i]}
                            tags={data.tags[i]}
                            id={id}
                            date={new Date(Date.parse(data.date[i])).toLocaleString()}
                            editDate={new Date(Date.parse(data.editDate[i])).toLocaleString()}
                        />
                        ))}
            </div>
        </div>
    );
}

export default ViewJobPosts;