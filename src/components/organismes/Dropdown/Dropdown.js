import React from 'react';
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownLink, DropdownMenu, BtnWrap } from './Dropdown.elements';
import { menuData } from '../../../data/MenuData';
import { Button } from '../../atoms';

const Dropdown = ({ toggle, isOpen }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClock={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => {
                        return (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary round big to='/contact'>
                        Contact us!
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default Dropdown;