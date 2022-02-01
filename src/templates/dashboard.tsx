import React from "react";
import FilterBtns from '../UI/organisms/filterBtns';
import TitleSection from '../UI/organisms/titleSection';
import CardSection from '../UI/organisms/cardSection';

type State = {}
type Props = {}

class DashboardTemplate extends React.Component<Props> {
    state: State = {}
    render() {
        return (
            <React.Fragment>
                <FilterBtns />
                <TitleSection />
                <CardSection />
            </React.Fragment>
        )
    }
}

export default DashboardTemplate;