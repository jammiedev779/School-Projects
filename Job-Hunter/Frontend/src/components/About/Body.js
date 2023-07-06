
export default function Body() {
    return <>
        <div className="px-10">
            {/* Hero Section */}
            <div className="mt-14 px-4">
                <h2 className="text-3xl font-bold mb-8 text-one">What is Job Hunter Website?</h2>
                Job Hunter is a project for Capstone I. This website idea is to create a platform where people who could be an employee or employer can find what they're looking for such as Job applications, workers and so on.
            </div>
            <section className="py-4 px-4 mb-4 mt-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-one">Benefit of Our Website</h2>
                    <ul className="list-disc pl-10">
                        <li className="text-xl font-semibold">
                            Increased Access to Job Opportunities
                            : 
                            <span className="text-base font-normal">
                                A job search website provides a centralized platform where job seekers can explore a wide range of job opportunities from various industries and locations. It allows individuals to access a larger pool of job listings than traditional methods like newspaper advertisements or physical job boards.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Efficient Job Search Process
                            :
                            <span className="text-base font-normal">
                                Job search websites offer powerful search and filtering features that enable users to narrow down their search based on specific criteria such as job title, location, salary, or industry. This saves time and effort for job seekers by providing them with relevant and targeted job listings.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            24/7 Availability
                            :
                            <span className="text-base font-normal">
                                Unlike physical job boards or recruitment agencies with limited operating hours, job search websites are accessible 24/7. Job seekers can search for jobs, submit applications, and update their profiles at any time that is convenient for them, increasing flexibility and convenience.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Access to Detailed Job Information
                            :
                            <span className="text-base font-normal">
                                Job search websites provide comprehensive job descriptions, requirements, and company profiles, allowing job seekers to gather detailed information about the job positions they are interested in. This helps them make more informed decisions and tailor their applications accordingly.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Efficient Application Process
                            :
                            <span className="text-base font-normal">
                                Job search websites often provide features that simplify the application process, such as the ability to upload resumes and cover letters, save job applications for future reference, and track the status of submitted applications. This streamlines the application process for job seekers and makes it easier to manage multiple applications.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Networking and Connections
                            :
                            <span className="text-base font-normal">
                                Many job search websites offer networking features where job seekers can connect with industry professionals, join groups or communities, and access career resources. This facilitates networking opportunities, knowledge sharing, and potential referrals, enhancing job seekers' chances of finding suitable employment.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Increased Visibility for Employers
                            :
                            <span className="text-base font-normal">
                                Job search websites allow employers to showcase their company and job openings to a wide audience. They can provide detailed information about their organization, culture, and benefits, attracting top talent and increasing their chances of finding qualified candidates.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Cost-Effective Hiring
                            :
                            <span className="text-base font-normal">
                                For employers, job search websites can be a cost-effective alternative to traditional hiring methods like newspaper ads or recruitment agencies. Posting job openings on a website can reach a larger audience at a lower cost, saving money on advertising and recruitment expenses.
                            </span>
                        </li>
                        <li className="text-xl font-semibold">
                            Efficient Candidate Screening
                            :
                            <span className="text-base font-normal">
                                Job search websites often provide tools and features that facilitate candidate screening and filtering. Employers can set specific criteria, such as qualifications or experience, and quickly identify suitable candidates based on their profiles or resumes. This streamlines the hiring process and helps employers identify the most qualified applicants.
                            </span>
                        </li>

                    </ul>
                </div>
            </section>
            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-one">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-3 gap-y-6 px-4">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src="http://localhost:3000/images/team/vinun.png"alt="Team Member" className="w-full aspect-video object-contain rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">SomBath Vinun</h3>
                                <p className="text-gray-700">Backend developer</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src="http://localhost:3000/images/team/ou.png"alt="Team Member" className="w-full aspect-video object-contain rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Vuthy Outhdom</h3>
                                <p className="text-gray-700">Frontend developer</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src="http://localhost:3000/images/team/sey.png"alt="Team Member" className="w-full aspect-video object-contain rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Sok Pisey</h3>
                                <p className="text-gray-700">Frontend developer</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src="http://localhost:3000/images/team/da.png"alt="Team Member" className="w-full aspect-video object-contain rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Tet Davann</h3>
                                <p className="text-gray-700">Frontend developer</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src="http://localhost:3000/images/team/visal.png"alt="Team Member" className="w-full aspect-video object-contain rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Som Visal</h3>
                                <p className="text-gray-700">Backend developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-4 px-4 mb-14">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-one">Our Mission & Vision</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg text-gray-800">
                                Employers can find the best employee that suits their job.
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg text-gray-800">
                                Employees can apply the best job that suit their skills.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg text-gray-800">
                                People can write articles about their experience or knowledge and share them to people on the platform.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg text-gray-800">
                                Reduce unemployed
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
}