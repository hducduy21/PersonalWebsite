const viState = {
    lan: 'vi',
    home: {
        title: 'I’m Hoàng Đức Duy',
        slogan: 'Thà vượt qua ranh giới và chịu hậu quả còn hơn là chỉ nhìn chằm chằm vào ranh giới cho đến hết đời',
    },
    profile: {
        lan: 'vi',
        title: 'Một chút về tôi',
        name: 'Hoàng Đức Duy',
        BD: '03/04/2002',
        address: 'Bình Thuận, Buôn Hồ, Đắk Lắk - Tân Phong, Q.7, TP. HCM',
        profession: 'Kỹ sư phần mềm',
        university: 'ĐH. Tôn Đức Thắng',
        hobby: 'Bóng đá, piano,...',

        timeline1: 'Hành trình của tôi bắt đầu',
        timeline2: 'THDTNT Buôn Hồ',
        timeline3: 'PTDTNT Nơ Trang Lơng',
        timeline4: 'PVF - Nha Trang',
        timeline5: 'Kỹ thuật phần mềm - Đại học Tôn Đức Thắng',
        timeline6: 'Gia đình',

        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6: '',
    },
    project: {
        lan: 'vi',
        title: 'Dự án nho nhỏ',
    },
};
const enState = {
    lan: 'en',
    home: {
        title: 'I’m Hoang Duc Duy',
        slogan: 'It’s better to cross the line and suffer the consequences than to just stare at the line for the rest of your life',
    },
    profile: {
        title: 'Somthing about me',
        name: 'Hoang Duc Duy',
        BD: '03/04/2002',
        address: 'Binh Thuan, Buon Ho, Dak Lak - Tan Phong, D.7, TP. HCM',
        profession: 'Web Developer',
        university: 'Ton Duc Thang University',
        hobby: 'FootBall, Sing, Piano',

        timeline1: 'My jorney started here',
        timeline2: 'Junior high school - PTDTNT Buon Ho',
        timeline3: 'High school - PTDTNT No Trang Long',
        timeline4: 'PVF - Nha Trang',
        timeline5: 'Software engineer - TDT University',
        timeline6: 'Family',

        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6: '',
    },
    project: { lan: 'en', title: 'My Projects' },
};

const lanReducer = (state = enState, action) => {
    switch (action.type) {
        case 'TO_VI': {
            return viState;
        }
        case 'TO_EN': {
            return enState;
        }
        default:
            return enState;
    }
};
export default lanReducer;
