import CompanyTable from '@/components/dashbaord/CompanyTable';
import { getCompanies } from '@/lib/api/companies';
import { getJobs } from '@/lib/api/jobs';
import React from 'react';


const AdminCompaniesPage = async () => {
    const companies = await getCompanies();
    const jobs = await getJobs();

    const jobCounts = jobs.reduce((acc, job) => {
        acc[job.companyId] = (acc[job.companyId] || 0) + 1;
        return acc;
    }, {});

    const companiesWithJobCount = companies.map((company) => ({
        ...company,
        jobCount: jobCounts[company._id] || 0,
    }));
    return (
        <div className="min-h-screen bg-[#0d0d0f] p-8 text-neutral-100">
            <div className="max-w-7xl mx-auto space-y-6">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-neutral-200">
                        Companies for review
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                        Total items submitted: {companies.length}
                    </p>
                </div>

                <CompanyTable companies={companiesWithJobCount} />
            </div>
        </div>
    );
};

export default AdminCompaniesPage;