

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Services() {
    const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>('English');

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-8">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Resume Builder</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Create professional resumes with our easy-to-use builder. Tailor your resume for specific job applications.</p>
                        {/* Add resume builder specific features or links here */}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Email Writing Assistance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Get help writing effective emails for various purposes. Improve your communication with our templates and tips.</p>
                        {/* Add email writing specific features or links here */}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Language Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Learn a new language with our interactive lessons and resources.</p>
                        <div className="mt-4">
                            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Spanish">Spanish</SelectItem>
                                    <SelectItem value="French">French</SelectItem>
                                    <SelectItem value="German">German</SelectItem>
                                    <SelectItem value="Chinese">Chinese</SelectItem>
                                    {/* Add more languages as needed */}
                                </SelectContent>
                            </Select>
                            {selectedLanguage && <p className="mt-2">Learning {selectedLanguage} resources are available.</p>}
                            {/* Add language learning specific features or links here, based on selectedLanguage */}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Services;
