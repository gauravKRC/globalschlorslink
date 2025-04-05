import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Define the interface for a University
interface University {
    id: number;
    name: string;
    country: string;
    ranking: string;
    programs: string[];
    // Add other properties as needed (e.g., tuition, website)
}

export default function Universities() {
    const [searchQuery, setSearchQuery] = useState('');
    const [country, setCountry] = useState('');
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUniversities = async () => {
            setLoading(true);
            setError(null);
            try {
                // Modified to use the mock API URL
                const response = await fetch(
                    `http://localhost:3001/api/universities?search=${searchQuery}&country=${country}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch universities');
                }
                const data: University[] = await response.json();
                setUniversities(data);
            } catch (err: any) { // Use any for error because type is unknown.
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, [searchQuery, country]);

    // Loading state handling
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8">Loading Universities...</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index}>
                            <Skeleton className="h-[200px] w-full rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Error state handling
    if (error) {
        return (
            <div className="container mx-auto px-4 py-12">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Find Your Perfect University</h1>

            {/* Search and Filter Section */}
            <div className="flex gap-4 mb-8">
                <Input
                    placeholder="Search universities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                />
                <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        {/* Add more countries as needed */}
                    </SelectContent>
                </Select>
            </div>

            {/* Universities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((university) => (
                    <UniversityCard key={university.id} {...university} />
                ))}
            </div>
        </div>
    );
}

function UniversityCard({ name, country, ranking, programs }: University) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-2">Country: {country}</p>
                <p className="text-gray-600 mb-2">World Ranking: {ranking}</p>
                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Popular Programs:</h4>
                    <ul className="list-disc list-inside">
                        {programs.map((program) => (
                            <li key={program}>{program}</li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}