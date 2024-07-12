import React from 'react';

export interface CustomIconProps {
    iconName: string;
    iconColor: string;
}

const StarIcon: React.FC<{ iconColor: string }> = ({ iconColor }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={iconColor}
        />
    </svg>
);

const HeartIcon: React.FC<{ iconColor: string }> = ({ iconColor }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
            fill={iconColor}
        />
    </svg>
);

const iconMap: Record<string, React.FC<{ iconColor: string }>> = {
    star: StarIcon,
    heart: HeartIcon,
};

export const renderCustomIcon: React.FC<CustomIconProps> = ({ iconName, iconColor }) => {
    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent iconColor={iconColor} /> : null;
};
