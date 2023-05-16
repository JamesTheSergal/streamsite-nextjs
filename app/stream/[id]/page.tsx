interface Stream {
    id: string;
    title: string;
    desc: string;
    streamer: string;
}

interface Props{
    params: { id: string };
}

export default async function Page({ params }: Props) {

}