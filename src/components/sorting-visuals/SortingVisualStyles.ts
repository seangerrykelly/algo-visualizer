import styled from "styled-components"

export const SortingVisualContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 24px;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    overflow-x: scroll;
`

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;

    @media (min-width: 768px) {
        flex-direction: row;
    }

`