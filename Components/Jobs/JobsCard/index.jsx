const JobsCard = () => {
    return (
        <div className="jobs_card">
            <div className="d-flex justify-content-between">
                <h1 className="title_jobs_card text-dark">Manager Customer Success</h1>
                <button className="btn btn-primary btn_apply_jobs_card">Apply Now</button>
            </div>
            <h3 className="company_jobs_card text-dark">TCP Software</h3>
            <h4 className="location_jobs_card text-dark">Lahore</h4>
            <ul className="mt-4 mb-3">
                <li>Optimize the customer lifecycle from onboarding to renewal</li>
                <li>Report effectiveness of teams efforts to the executive team</li>
                <li>Increase the lifetime value of accounts and reduce churn by maximizing product adoption, monitoring customer satisfaction (NPS), and improving overall account health</li>
            </ul>
            <p>Hiring Ongoing</p>

        </div>
    )
}
export default JobsCard;