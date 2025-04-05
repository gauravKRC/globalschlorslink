import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VisaServices() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Visa Application Services</h1>

            <Tabs defaultValue="student" className="mb-12">
                <TabsList>
                    <TabsTrigger value="student">Student Visa</TabsTrigger>
                    <TabsTrigger value="work">Work Visa</TabsTrigger>
                    <TabsTrigger value="tourist">Tourist Visa</TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Student Visa Services</h2>
                            <p className="text-gray-600 mb-4">
                                We provide comprehensive support for student visa applications to help you pursue your education abroad.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li>✓ Document preparation assistance</li>
                                <li>✓ Application review</li>
                                <li>✓ Interview preparation</li>
                                <li>✓ Timeline management</li>
                            </ul>
                            <Button>Get Started</Button>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Required Documents</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li>• Valid passport</li>
                                    <li>• University acceptance letter</li>
                                    <li>• Financial statements</li>
                                    <li>• Language proficiency proof</li>
                                    <li>• Health insurance</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Similar content structure for other visa types */}
                <TabsContent value="work">
                    {/* Work visa content */}
                </TabsContent>
                <TabsContent value="tourist">
                    {/* Tourist visa content */}
                </TabsContent>
            </Tabs>

            {/* Process Timeline */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Visa Application Process</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 1</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Initial Consultation</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 2</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Document Collection</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 3</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Application Submission</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 4</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Visa Interview</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}