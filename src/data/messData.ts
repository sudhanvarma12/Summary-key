import { CollegeMessInfo } from '../types';

export const MESS_DATA: CollegeMessInfo[] = [
  // Visakha Valley School
  {
    institutionId: 'vvs',
    institutionName: 'Visakha Valley School',
    hostelOrCanteenName: 'Visakha Valley Campus Dining & Canteen (Kailasagiri)',
    canteenSpecial: 'Valley Hot Samosas, Steamed Corn Cups, Idli-Vada & Fresh Fruit Bowls',
    hygieneRating: '4.9 / 5.0 (Parent Teacher Association Audited)',
    todaySpecial: 'Fresh Veg Pulao with Raitha, Mini Idli with Ghee Podi, and Chilled Real Mango Juice',
    aiDietTip: 'Board Exam Sprint: Bananas and soaked almonds before 9 AM school assembly boost alertness for double science periods.',
    menu: [
      {
        day: 'Monday',
        breakfast: 'Steamed Idli with Coconut Chutney & Mild Sambar, Fresh Milk',
        lunch: 'Vegetable Khichdi with Ghee, Roasted Papad, Curd, Apple slices',
        snacks: 'Kailasagiri Baked Samosa & Warm Cardamom Milk',
        dinner: 'Light Phulka, Yellow Moong Dal, Steamed Rice, Curd',
        special: 'Warm Carrot Halwa (1 small cup)',
        rating: 4.8
      },
      {
        day: 'Tuesday',
        breakfast: 'Puri with Aloo Kurma, Seasonal Banana, Warm Milk',
        lunch: 'Jeera Rice, Paneer Butter Masala, Mixed Salad, Curd',
        snacks: 'Vegetable Cutlet with Mint Dip & Lemonade',
        dinner: 'Roti, Dal Tadka, Gobi Aloo, Steamed Rice, Buttermilk',
        special: 'Gulab Jamun (1 pc)',
        rating: 4.9
      },
      {
        day: 'Wednesday',
        breakfast: 'Poha with crunchy peanuts & roasted carrots, Milk',
        lunch: 'Peas Pulao, Dal Fry, Potato Fry, Curd Rice, Crisp Papad',
        snacks: 'Steamed Sweet Corn with butter and chaat masala',
        dinner: 'Chapati, Rajma Masala, White Rice, Tomato Soup',
        special: 'Fruit Custard with Pomegranate',
        rating: 4.95
      },
      {
        day: 'Thursday',
        breakfast: 'Upma with mild coconut podi, Fresh Apple slices',
        lunch: 'South Indian School Thali: Rice, Tomato Pappu, Rasam, Curd',
        snacks: 'Crispy Veg Puff & Hot Horlicks / Bournvita',
        dinner: 'Phulka, Palak Paneer, Jeera Rice, Curd',
        special: 'Sweet Boondi',
        rating: 4.7
      },
      {
        day: 'Friday',
        breakfast: 'Mini Dosa with Mild Peanut Chutney & Tomato Chutney',
        lunch: 'Fried Rice with Mild Veg Manchurian Gravy, Curd, Banana',
        snacks: 'Cheese Corn Sandwich & Fresh Orange Juice',
        dinner: 'Roti, Chana Masala, Steamed Rice, Buttermilk',
        special: 'Vanilla Ice Cream Cup',
        rating: 4.9
      },
      {
        day: 'Saturday',
        breakfast: 'Uttapam with Coconut Chutney, Fresh Milk',
        lunch: 'Lemon Rice, Curd Rice, Crisp Potato Wafers, Dal',
        snacks: 'Biscuits & Fruit Milkshake',
        dinner: 'Chapati, Dal Makhani, Rice, Curd',
        special: 'Rava Kesari',
        rating: 4.8
      },
      {
        day: 'Sunday',
        breakfast: 'Chole with Soft Bhature, Fresh Fruit',
        lunch: 'Sunday Special Meals: Bagara Rice, Paneer Korma, Curd',
        snacks: 'Evening Snack Platter',
        dinner: 'Light Dinner: Chapati, Moong Dal, White Rice, Curd',
        special: 'Payasam',
        rating: 4.9
      }
    ]
  },

  // GVPCOE
  {
    institutionId: 'gvp',
    institutionName: 'GVPCOE',
    hostelOrCanteenName: 'GVPCOE Hostels & Canteen (Madhurawada)',
    canteenSpecial: 'South Block Canteen Ghee Dosa & Filter Coffee',
    hygieneRating: '4.8 / 5.0 (Student Peer Audited)',
    todaySpecial: 'Special Veg Biryani, Mirchi Ka Salan, Paneer Butter Masala & Gulab Jamun',
    aiDietTip: 'Exam sprint day: High protein paneer + curds will keep energy steady during 3-hour library study sessions.',
    menu: [
      {
        day: 'Monday',
        breakfast: 'Idli, Medu Vada with Coconut Chutney & Sambar, Tea/Coffee',
        lunch: 'Steamed Rice, Tomato Dal, Potato Fry, Rasam, Curd, Papad',
        snacks: 'Onion Pakoda & Masala Chai',
        dinner: 'Roti, Mixed Vegetable Curry, Rice, Sambar, Butter Milk',
        special: 'Gulab Jamun (1 pc)',
        rating: 4.6
      },
      {
        day: 'Tuesday',
        breakfast: 'Mysore Bonda / Pesarattu with Allam Chutney, Coffee',
        lunch: 'Bagara Rice, Meal Maker Curry, Palak Pappu, Pepper Rasam, Curd',
        snacks: 'Mirchi Bajji & Lemon Tea',
        dinner: 'Chapati, Paneer Curry, Jeera Rice, Dal Fry, Fresh Curd',
        special: 'Sweet Boondi',
        rating: 4.7
      },
      {
        day: 'Wednesday',
        breakfast: 'Poori with Aloo Masala Curry, Fresh Milk / Coffee',
        lunch: 'Lemon Rice, White Rice, Sambar, Cabbage Kootu, Curd',
        snacks: 'Veg Cutlet with Mint Chutney',
        dinner: 'Special Veg Biryani, Mirchi Ka Salan, Raitha, Ice Cream',
        special: 'Mid-week Feast Special',
        rating: 4.9
      },
      {
        day: 'Thursday',
        breakfast: 'Upma with Groundnut Podi, Ghee & Sev, Tea/Coffee',
        lunch: 'White Rice, Gongura Pappu, Tindora Fry, Majjiga Pulusu, Curd',
        snacks: 'Punugulu with Spicy Chutney',
        dinner: 'Phulka, Dal Tadka, Aloo Gobhi, White Rice, Rasam, Curd',
        special: 'Fruit Salad with Custard',
        rating: 4.5
      },
      {
        day: 'Friday',
        breakfast: 'Rava Dosa / Masala Dosa, Peanut Chutney, Sambar',
        lunch: 'Vegetable Pulao, Dal Makhani, Crispy Bhindi Fry, Curd',
        snacks: 'Samosa & Hot Ginger Tea',
        dinner: 'Chapati, Chana Masala, Rice, Sambar, Payasam',
        special: 'Semya Payasam',
        rating: 4.8
      },
      {
        day: 'Saturday',
        breakfast: 'Uttapam with Tomato Onion Chutney, Coffee',
        lunch: 'Curd Rice, Tamarind Pulihora, White Rice, Dal, Appalam',
        snacks: 'Sweet Corn Masala Cup',
        dinner: 'North Indian Thali: Poori, Paneer Butter Masala, Veg Fried Rice',
        special: 'Kala Jamun',
        rating: 4.7
      },
      {
        day: 'Sunday',
        breakfast: 'Chole Bhature with Pickled Green Chilli & Lassi',
        lunch: 'Special Andhra Meals: Pappu Charu, Vankaya Kothimeera Karam, Crispy Appadalu',
        snacks: 'Biscuits & Filter Coffee',
        dinner: 'Light Dinner: Chapati, Dal, Tomato Rice, Curd',
        special: 'Rava Kesari',
        rating: 4.9
      }
    ]
  },

  // GITAM
  {
    institutionId: 'gitam',
    institutionName: 'GITAM',
    hostelOrCanteenName: 'GITAM Hostels & Food Court (Rushikonda)',
    canteenSpecial: 'Kokila Mess Andhra Thali & Beach-Side Maggi Point',
    hygieneRating: '4.7 / 5.0 (FSSAI Verified)',
    todaySpecial: 'Kaju Paneer Pulao, Dal Bukhara & Shahi Tukda',
    aiDietTip: 'Complex carbs from multi-grain roti reduce mid-afternoon drowsiness in 2 PM lab classes.',
    menu: [
      {
        day: 'Monday',
        breakfast: 'Poha with Sev & Fried Groundnuts, Boiled Sprouts, Filter Coffee',
        lunch: 'Rajma Chawal, Jeera Aloo, Boondi Raita, Chapati, Salad',
        snacks: 'Pani Puri / Bhel Puri at Mess Courtyard',
        dinner: 'Tandoori Roti, Dal Tadka, Kadai Paneer, Steamed Rice',
        special: 'Mango Kulfi',
        rating: 4.6
      },
      {
        day: 'Wednesday',
        breakfast: 'Masala Dosa with Sambar & Allam Chutney',
        lunch: 'Hyderabadi Dum Biryani / Veg Biryani, Salan, Onion Raitha',
        snacks: 'French Fries & Chocolate Milk',
        dinner: 'Rumali Roti, Paneer Tikka Masala, Steamed Rice, Dal',
        special: 'Hot Gulab Jamun',
        rating: 4.9
      }
    ]
  }
];
