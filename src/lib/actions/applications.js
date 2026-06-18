'use server'

import { serverMutation } from "../core/server";

export const applyToJob = async (applicationData) => {
    return serverMutation('/api/applications', applicationData);
}

