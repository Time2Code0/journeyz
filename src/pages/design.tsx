import DefaultLayout from "@components/Layouts/Default";
import { ReactNode } from "react";
import { H1, H2, H3, H4, H5, Input, SectionContainer } from "../components/atoms";
import { Button, ErrorCallout, InfoCallout, SuccessCallout, WarningCallout } from "../components/molecules";

export default function Design() {
    return (
        <DefaultLayout>
            <main>
                <Section title="Typography">
                    <Title title="Display" />
                    Almost before we knew it, we had left the ground.

                    <Title title="H1" />
                    <H1>
                        Almost before we knew it, we had left the ground.
                    </H1>

                    <Title title="H2" />
                    <H2>
                        Almost before we knew it, we had left the ground.
                    </H2>

                    <Title title="H3" />
                    <H3>
                        Almost before we knew it, we had left the ground.
                    </H3>

                    <Title title="H4" />
                    <H4>
                        Almost before we knew it, we had left the ground.
                    </H4>

                    <Title title="H5" />
                    <H5>
                        Almost before we knew it, we had left the ground.
                    </H5>
                </Section>

                <Section title="Buttons">
                    <ul className="flex gap-8">
                        <li>
                            <div>
                                <Button className="mx-4" size="small" color="primary" appearance="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="regular">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="primary" appearance="outline">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="outline">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="outline">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" appearance="outline">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" appearance="outline">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" appearance="outline">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="primary" appearance="minimal">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="minimal">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="minimal">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" appearance="minimal">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" appearance="minimal">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" appearance="minimal">
                                    Test
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div>
                                <Button className="mx-4" size="small" color="primary" appearance="regular" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="regular" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="regular" cornerRadius="regular">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" cornerRadius="regular">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="primary" appearance="outline" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="outline" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="outline" cornerRadius="regular">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" appearance="outline" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" appearance="outline" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" appearance="outline" cornerRadius="regular">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="primary" appearance="minimal" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="minimal" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="minimal" cornerRadius="regular">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" appearance="minimal" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" appearance="minimal" cornerRadius="regular">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" appearance="minimal" cornerRadius="regular">
                                    Test
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div>
                                <Button className="mx-4" size="small" color="primary" appearance="regular" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="regular" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="regular" cornerRadius="full">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" cornerRadius="full">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="primary" appearance="outline" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="outline" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="outline" cornerRadius="full">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" appearance="outline" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" appearance="outline" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" appearance="outline" cornerRadius="full">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="primary" appearance="minimal" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="primary" appearance="minimal" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="primary" appearance="minimal" cornerRadius="full">
                                    Test
                                </Button>
                            </div>

                            <div className="mt-4">
                                <Button className="mx-4" size="small" color="grey" appearance="minimal" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="regular" color="grey" appearance="minimal" cornerRadius="full">
                                    Test
                                </Button>

                                <Button className="mx-4" size="large" color="grey" appearance="minimal" cornerRadius="full">
                                    Test
                                </Button>
                            </div>
                        </li>
                    </ul>
                </Section>

                <Section title="Callouts">
                    <InfoCallout title="Info Callout">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </InfoCallout>

                    <SuccessCallout title="Success Callout">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </SuccessCallout>

                    <WarningCallout title="Warning Callout">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </WarningCallout>

                    <ErrorCallout title="Error Callout">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </ErrorCallout>
                </Section>

                <Section title="Input">
                    <Input inputLabelText="Test" placeholderText="Long Test" />
                </Section>
            </main>
        </DefaultLayout>
    )
}

function Title({ title }: { title: string }) {
    return (
        <p className="mb-2 mt-6">{title}</p>
    )
}

interface SectionProps {
    title?: string;
    children: ReactNode
}

function Section({ title, children }: SectionProps) {
    return (
        <SectionContainer>
            {title && (<H2 className="mb-6 mt-8">{title}</H2>)}

            {children}
        </SectionContainer>
    )
}