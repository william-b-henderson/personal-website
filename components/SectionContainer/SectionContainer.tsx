import { Box, Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { NavItem } from '../Navigation/NavItem'
import { NavMenu } from '../Navigation/NavMenu'
import { PageSection } from '../PageSection'

export const SectionContainer: FC = ({ children }) => {
    const alternatingColors = [ "#DDDDDD", "#555555"]
    const sections = null;

    // if (children !== undefined && children !== null) {
    //     React.Children.map((children, index) => {
    //         return <PageSection color={alternatingColor[index % alternatingColors.length]} />;
    //     });
    // }

    return (
        <Flex direction="column" width="100vw">
            {sections && sections}
        </Flex>
    )
}

