import type { User } from "./user-type";

const url = 'https://www.date4dos.co.il/members/search_friends/?get_members';

const data = {
    'form[show]': '0',
    'form[mem_gender]': '2',
    'form[age_from]': '18',
    'form[age_upto]': '26',
    'form[height_from]': '0',
    'form[height_upto]': '0',
    'form[mem_family_stat]': '0',
    'form[mem_prayer_time]': '0',
    'form[mem_origin]': '1,4,6,7,10',
    'form[mem_education]': '',
    'form[mem_economics_situation]': '0',
    'form[mem_smoking]': '0',
    'form[mem_subscription_status]': '',
    'form[mem_member_type]': '',
    'form[mem_photo1]': '1',
    'form[mem_area]': '',
    'form[mem_religion_sector]': '1,2,5,7,8,12,13',
    'form[mem_city]': 'אשדוד,+ישראל',
    'form[mem_city_dist]': '2',
    search_type: 'advanced',
    start: '0'
};

export const get_data = async () => {

    const all_data: User[] = [];

    for (let index = 0; index < 3; index++) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data).toString()
        });

        const list_users = await response.json();

        all_data.push(...list_users.members);

        data.start = String(Number(data.start) + 50);
    }
    return all_data;
};