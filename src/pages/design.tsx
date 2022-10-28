import DefaultLayout from "@components/Layouts/Default";
import { H1, H2, H3, H4, H5 } from "../components/atoms";
import { Button } from "../components/molecules";

export default function Design() {
    return (
        <DefaultLayout>
            <main>
                <H1>
                    Almost before we knew it, we had left the ground.
                </H1>
                <H2>
                    Almost before we knew it, we had left the ground.
                </H2>
                <H3>
                    Almost before we knew it, we had left the ground.
                </H3>
                <H4>
                    Almost before we knew it, we had left the ground.
                </H4>
                <H5>
                    Almost before we knew it, we had left the ground.
                </H5>

                <Button>
                    Do something
                </Button>

                <Button color="grey">
                    Do something but in Grey
                </Button>

                <Button appearance="outline">
                    Do something and Outline
                </Button>

                <Button appearance="outline" color="grey">
                    Do something but in Grey and Outline
                </Button>
            </main>
        </DefaultLayout>
    )
}