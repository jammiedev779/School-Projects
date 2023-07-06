import { Form } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useState, useEffect, useRef } from "react";
import { useStateContext } from "../../context/ContextProvider";

export default function JobFilter({ sendDataToParent, className ,sliceData}) {
    const { categories, job_categories } = useStateContext();

    useEffect(() => {
        axiosClient.get("/search").then((response) => {
            setPosts(response.data);
        });
    }, []);

    const searchRef = useRef();
    const categoryRef = useRef();
    const salaryRef = useRef();

    // data for searching
    const [jobTypes, setJobTypes] = useState([]);
    const [experience, setExperience] = useState(null);
    const [salary, setSalary] = useState(0);
    const [posts, setPosts] = useState([]);

    const exps = [
        "Internship - No experience",
        "Less than 6 month",
        "0.5 - 1 year",
        "1 - 2 years",
        "2 - 4 years",
        "More than 4 years",
    ];
    const handleJobType = (event) => {

        const type = event.target.value;
        if(jobTypes.includes(type)){
            const tmp = jobTypes.filter(item => item !== type);
            setJobTypes(tmp);
        }else{
            setJobTypes([...jobTypes, type]);
        }
    };
    const handleExp = (event) => {
        setExperience(event.target.value);
    };

    const reset = () => {
        setExperience(null);
        setJobTypes([]);
        setSalary(0);
    };

    const handleSearch = () => {
        let newUpdate = posts.filter((item) =>
            item.post_name
                .toLowerCase()
                .includes(searchRef.current.value.toLowerCase())
        );

        if (categoryRef.current.value != 0) {
            newUpdate = newUpdate.filter(
                (item) => item.job_category_id == categoryRef.current.value
            );
        }
        if (jobTypes.length > 0) {
            newUpdate = newUpdate.filter((item) =>
                jobTypes.includes(item.category_id.toString())
            );
        }
        if (experience != null) {
            newUpdate = newUpdate.filter((item) => item.experience === experience);
        }
        if (salary != 0) {
            newUpdate = newUpdate.filter((item) => parseInt(item.salary) >= salary);
        }
        sliceData(newUpdate);
        sendDataToParent(newUpdate);
    };

    useEffect(() => {
        handleSearch();
    }, [jobTypes, experience, salary,categoryRef]);

    return (
        <>
            <div className={className}>
                <h3 className="lg:text-2xl md:text-xl text-one font-semibold">
                    Filter
                </h3>

                <div className="border-1 border-one lg:px-4 md:px-2 py-2 mt-3">
                    <Form>
                        {/* Keyword */}
                        <p className="text-lg text-one">Keyword</p>
                        <input
                            ref={searchRef}
                            type="search"
                            placeholder="Search..."
                            className="w-full outline-none border-1 border-one mt-1 px-2"
                            onChange={handleSearch}
                        ></input>

                        {/* Category */}
                        <p className="text-lg text-one mt-4">Category</p>
                        <select
                            ref={categoryRef}
                            className="w-full border-one border-1 outline-none mt-1"
                            onChange={handleSearch}
                        >
                            <option selected value={0}>
                                Choose Job Field
                            </option>
                            {job_categories.map((job_category) => (
                                <option key={job_category.id} value={job_category.id}>
                                    {job_category.job_name}
                                </option>
                            ))}
                        </select>

                        {/* Job type */}
                        <p className="text-lg text-one mt-4">Job type</p>
                        <ul className="mt-1">
                            <li>
                                {categories.map((category) => (
                                    <div key={category.id}>
                                        <input
                                            type="checkbox"
                                            value={category.id}
                                            id={category.name}
                                            name="jobtype"
                                            className="border-one "
                                            onClick={handleJobType}
                                        />
                                        <label htmlFor={category.name} className="pl-1 py-2 ">
                                            {" "}
                                            {category.name}{" "}
                                        </label>
                                    </div>
                                ))}
                            </li>
                        </ul>

                        {/* Experience */}
                        <p className="text-lg text-one mt-4">Experience</p>
                        <ul className="mt-1">
                            {exps.map((item) => (
                                <li key={item}>
                                    <input
                                        type="radio"
                                        id={item}
                                        name="experienceFilter"
                                        className="border-one "
                                        onChange={handleExp}
                                        value={item}
                                    />
                                    <label htmlFor={item} className="pl-2 ">
                                        {" "}
                                        {item}{" "}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        {/* Salary */}
                        {/* <div className="flex">
                            <p className="text-lg text-one mt-4">Salary: </p>
                            <label
                                className="text-lg text-gray-500 font-bold mt-4 pl-3"
                                htmlFor="salary123"
                            >
                                &gt; <span id="salaried"> {salary} </span>
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <input
                                ref={salaryRef}
                                id="salary123"
                                type="range"
                                max={2000}
                                min={100}
                                defaultValue={250}
                                onChange={(e) => {
                                    document.querySelector("#salaried").textContent =
                                        e.target.value;
                                    setSalary(e.target.value);
                                }}
                            />
                        </div> */}

                        {/* Reset button */}
                        <button
                            className="w-full mt-4 text-lg text-white bg-one py-1 hover:bg-blue-950 "
                            type="reset"
                            onClick={reset}
                        >
                            Reset
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
}