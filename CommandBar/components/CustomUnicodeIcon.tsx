import React from 'react';

export interface CustomIconProps {
    iconName: string;
    iconColor: string;
}

const UnicodeIcon: React.FC<CustomIconProps> = ({ iconName, iconColor }) => {
    const iconClassName = `unicode-icon ${iconName.toLowerCase()}`;
    return <span className={iconClassName} style={{ color: iconColor }} />;
};

export const renderCustomUnicodeIcon: React.FC<CustomIconProps> = ({ iconName, iconColor }) => {
    return <UnicodeIcon iconName={iconName} iconColor={iconColor} />;
};
