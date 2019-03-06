import styled from 'styled-components'

export const WordsWrapper = styled.div`
    display: flex;
    background-color: #fb5135;
    overflow: hidden;
    height: 150px;
    width: 150px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    border-radius: 50%;
`

export const List = styled.ul`
    font-family: 'Source Sans Pro';
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -2px;
    text-transform: uppercase;
    transform: translateX(-30px);
    font-smooth: always;
    -webkit-filter: blur(0);
    ${'' /* -webkit-font-smoothing: antialiased; */}
    -webkit-font-kerning: normal;
    ${'' /* -webkit-text-size-adjust: 100%; */}

    &:hover .logo-text-item {
        transform: translate(0, calc(-20px + 0.5px));
        -webkit-transform: translate(0, calc(-20px + 0.5px));
    }
`

export const Item = styled.li`
    height: 20px;
    overflow: hidden; 
    position: relative;
    margin-bottom: 0;

    &:nth-child(odd) {
        transform: skew(60deg, -30deg) scaleY(.66667);
    }
    &:nth-child(even) {
        transform: skew(0deg, -30deg) scaleY(1.33333);
    }
    &:nth-child(1) {
        left: 0;
    }
    &:nth-child(2) {
        left: 12px;
    }
    &:nth-child(3) {
        left: 24px;
    }
    &:nth-child(4) {
        left: 36px;
    }
    &:nth-child(5) {
        left: 48px;
    }
    & .logo-letter-vertical {
        color: #eedece;
    }

    & .logo-letter-horizontal {
        color: #fff;
    }
`
export const TextItem = styled.p`
    height: 8px;
    line-height: 12px;
    padding: 0 10px;
    transition: all 0.4s ease-in-out;
    vertical-align: top;
    white-space: nowrap;
    color: #FFFFFF;
    font-size: 20px;
    -webkit-filter: blur(0);
    
`
