import React from "react"
import { WordsWrapper, TextItem, Item, List } from './style'

const Logo = () => (
    <WordsWrapper>
        <List>
            <Item>
                <TextItem className='logo-text-item'>&nbsp;</TextItem>
                <TextItem className='logo-text-item logo-letter-horizontal'>HOME</TextItem>
            </Item>
            <Item>
                <TextItem className='logo-text-item logo-letter-vertical'>HOME</TextItem>
                <TextItem className='logo-text-item logo-letter-vertical'>ARCHITECTURE</TextItem>
            </Item>
            <Item>
                <TextItem className='logo-text-item logo-letter-horizontal'>ARCHITECTURE</TextItem>
                <TextItem className='logo-text-item logo-letter-horizontal'>&nbsp;</TextItem>
            </Item>
        </List>
    </WordsWrapper>
)

export default Logo