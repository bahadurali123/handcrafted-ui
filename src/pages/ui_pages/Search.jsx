import { Helmet } from "react-helmet";
import { Search as SearchComponent } from "../../components/index";

function Search() {
    return (
        <>
            <Helmet>
                <title>Search - Handcrafted</title>
                <meta name="description" content="Find handcrafted products quickly with our search feature." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/shop/search" />
            </Helmet>
            <SearchComponent />
        </>
    )
}

export default Search;