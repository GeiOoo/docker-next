
function page(props: {
    params: {
        slug: string;
    };
}) {
    return (
        <div>page {props.params.slug}</div>
    );
}

export default page;
