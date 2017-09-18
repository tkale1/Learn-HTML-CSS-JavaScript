
// city_state.js //

var countries = Object();
countries['Asia'] = 'Bangladesh|Bhutan|Brunei|Burma (Myanmar)|Cambodia|China|East Timor|India|Indonesia|Japan|Kazakhstan|Korea (north)|Korea (south)|Laos|Malaysia|Maldives|Mongolia|Nepal|Philippines|Russian Federation|Singapore|Sri Lanka|Taiwan|Thailand|Vietnam';
countries['North America'] = 'Bermuda|Canada|Greenland|Mexico|United States';
//////
var city_states = Object();

//Asia
city_states['Bangladesh'] = '|Dhaka|Barisal|Chittagong|Khulna|Rajshahi|Sylhet';
city_states['Bhutan'] = '|Thimphu|Bumthang|Chhukha|Chirang|Dagana|Gasa|Geylegphug|Ha|Lhuntshi|Mongar|Paro|Pemagatsel|Punakha|Samchi|Samdrup Jongkhar|Shemgang|Tashigang|Tongsa|Wangdi Phodrang|Yangtse';
city_states['Brunei'] = '|Bandar Seri Begawan||Belait|Brunei/Muara|Temburong|Tutong';
city_states['Burma (Myanmar)'] = '|Rangoon|Ayeyarwady|Bago|Chin|Kachin|Kayin|Kayah|Magway|Mandalay|Mon|Rakhine|Sagaing|Shan|Tanintharyi|Yangon';
city_states['Cambodia'] = '|Phnom Penh|Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev';
city_states['China'] = '|Beijing|Anhui|Chongqing|Fujian|Gansu|Guangdong|Guangxi|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Nei Mongol|Ningxia|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Tianjin|Xinjiang|Xizang (Tibet)|Yunnan|Zhejiang';
city_states['East Timor'] = '|Dili|Aileu|Ainaro|Baucau|Bobonaro (Maliana)|Cova-Lima (Suai)|Ermera|Lautem (Los Palos)|Liquica|Manatuto|Manufahi (Same)|Oecussi (Ambeno)|Viqueque';
city_states['India'] = '|New Delhi|Andaman/Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra/Nagar Haveli|Daman/Diu|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu/Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttaranchal|Uttar Pradesh|West Bengal';
city_states['Indonesia'] = '|Jakarta|Aceh|Bali|Banten|Bengkulu|Gorontalo|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Papua|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta';
city_states['Japan'] = '|Tokyo|Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi';
city_states['Kazakhstan'] = '|Astana|Almaty|Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl';
city_states['Korea (north)'] = '|Pyongyang|Chagang-do|Hamgyong-bukto|Hamgyong-namdo|Hwanghae-bukto|Hwanghae-namdo|Kaesong-si|Kangwon-do|Najin Sonbong-si|Nampo-si|Pyongan-bukto|Pyongan-namdo|Pyongyang-si|Yanggang-do';
city_states['Korea (south)'] = '|Seoul|Cheju-do|Cholla-bukto|Cholla-namdo|Chungchong-bukto|Chungchong-namdo|Inchon-gwangyoksi|Kangwon-do|Kwangju-gwangyoksi|Kyonggi-do|Kyongsang-bukto|Kyongsang-namdo|Pusan-gwangyoksi|Soul-tukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi';
city_states['Laos'] = '|Vientiane||Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louangnamtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhet|Viangchan|Viangchan|Xaignabouli|Xaisomboun|Xekong|Xiangkhoang';
city_states['Malaysia'] = '|Kuala Lumpur|Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Putrajaya|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan';
city_states['Maldives'] = '|Maale||Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu';
city_states['Mongolia'] = '|Ulaanbaatar|Arhangay|Bayanhongor|Bayan-Olgiy|Bulgan|Darhan Uul|Dornod|Dornogovi|Dundgovi|Dzavhan|Govi-Altay|Govi-Sumber|Hentiy|Hovd|Hovsgol|Omnogovi|Orhon|Ovorhangay|Selenge|Suhbaatar|Tov|Uvs';
city_states['Nepal'] = '|Kathmandu|Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti';
city_states['Philippines'] = '|Manila|Oriental|North Cotabato|Northern Samar|Nueva Ecija|Nueva Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon City|Quirino|Rizal|Romblon|Roxas|Samar|San Carlos (Negros Occidental)|San Carlos (Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Cotabato|Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawi-Tawi|Toledo|Trece Martires|Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur';
city_states['Russian Federation'] = '|Moskva (Moscow)|Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Arkhangelskaya|Astrakhanskaya|Bashkortostan (Ufa)|Belgorodskaya|Bryanskaya|Buryatiya (Ulan-Ude)|Chechnya (Groznyy)|Chelyabinskaya|Chitinskaya|Chukotskiy (Anadyr)|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran)|Irkutskaya|Ivanovskaya|Kabardino-Balkariya (Nalchik)|Kaliningradskaya|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Kemerovskaya|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Koryakskiy (Palana)|Kostromskaya|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)|Moskovskaya|Murmanskaya|Nenetskiy (Naryan-Mar)|Nizhegorodskaya|Novgorodskaya|Novosibirskaya|Omskaya|Orenburgskaya|Orlovskaya (Orel)|Penzenskaya|Permskaya|Komi-Permyatskiy (Kudymkar)|Primorskiy (Vladivostok)|Pskovskaya|Rostovskaya|Ryazanskaya|Sakha (Yakutiya)|Sakhalinskaya (Yuzhno-Sakhalinsk)|Samarskaya|Sankt-Peterburg (Saint Petersburg)|Saratovskaya|Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)|Smolenskaya|Stavropolskiy|Sverdlovskaya (Yekaterinburg)|Tambovskaya|Tatarstan (Kazan)|Taymyrskiy (Dudinka)|Tomskaya|Tulskaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ulyanovskaya|Ust-Ordynskiy Buryatskiy (Ust-Ordynskiy)|Vladimirskaya|Volgogradskaya|Vologodskaya|Voronezhskaya|Yamalo-Nenetskiy (Salekhard)|Yaroslavskaya|Yevreyskaya';
city_states['Singapore'] = '';
city_states['Sri Lanka'] = '|Colombo|Central|North Central|Northern|Eastern|North Western|Sabaragamuwa|Southern|Uva|Western';
city_states['Taiwan'] = '|Taipei|Chang-hua|Chia-i|Chi-lung|Chung-hsing-hsin-tsun|Hsin-chu|Hua-lien|I-lan|Kao-hsiung|Miao-li|Nan-tou|Peng-hu|Ping-tung|Tai-chung|Tai-nan|Tai-pei|Tai-tung|Tao-yuan/Yun-lin';
city_states['Thailand'] = '|Bangkok|Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing';
city_states['Vietnam'] = '|Hanoi|An Giang|Bac Giang|Bac Kan|Bac Lieu|Bac Ninh|Ba Ria-Vung Tau|Ben Tre|Binh Dinh|Binh Duong|Binh Phuoc|Binh Thuan|Ca Mau|Can Tho|Cao Bang|Dac Lak|Da Nang|Dong Nai|Dong Thap|Gia Lai|Ha Giang|Hai Duong|Hai Phong|Ha Nam|Ha Noi|Ha Tay|Ha Tinh|Hoa Binh|Ho Chi Minh|Hung Yen|Khanh Hoa|Kien Giang|Kon Tum|Lai Chau|Lam Dong|Lang Son|Lao Cai|Long An|Nam Dinh|Nghe An|Ninh Binh|Ninh Thuan|Phu Tho|Phu Yen|Quang Binh|Quang Nam|Quang Ngai|Quang Ninh|Quang Tri|Soc Trang|Son La|Tay Ninh|Thai Binh|Thai Nguyen|Thanh Hoa|Thua Thien-Hue|Tien Giang|Tra Vinh|Tuyen Quang|Vinh Long|Vinh Phuc|Yen Bai';


//North America
city_states['Bermuda'] = 'Hamilton|Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint Georges|Sandys|Smiths|Southampton|Warwick';
city_states['Canada'] = 'Ottawa|Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland and Labrador|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory';
city_states['Caribbean'] = '';
city_states['Greenland'] = 'Nuuk (Godthab)|Avannaa (Nordgronland)|Tunu (Ostgronland)|Kitaa (Vestgronland)';
city_states['Mexico'] = 'Mexico (Distrito Federal)|Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas';
city_states['United States'] = 'Washington DC|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Georgia|Kentucky|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusets|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming';


function setRegions()
{
	for (region in countries)
		document.write('<option value="' + region + '">' + region + '</option>');
}

function set_country(oRegionSel, oCountrySel, oCity_StateSel)
{
	var countryArr;
	oCountrySel.length = 0;
	oCity_StateSel.length = 0;
	var region = oRegionSel.options[oRegionSel.selectedIndex].text;
	if (countries[region])
	{
		oCountrySel.disabled = false;
		oCity_StateSel.disabled = true;
		oCountrySel.options[0] = new Option('SELECT COUNTRY','');
		countryArr = countries[region].split('|');
		for (var i = 0; i < countryArr.length; i++)
			oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
		document.getElementById('txtregion').innerHTML = region;
		document.getElementById('txtplacename').innerHTML = '';
	}
	else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel, oCity_StateSel)
{
	var city_stateArr;
	oCity_StateSel.length = 0;
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	if (city_states[country])
	{
		oCity_StateSel.disabled = false;
		oCity_StateSel.options[0] = new Option('SELECT NEAREST DIVISION','');
		city_stateArr = city_states[country].split('|');
		for (var i = 0; i < city_stateArr.length; i++)
			oCity_StateSel.options[i+1] = new Option(city_stateArr[i],city_stateArr[i]);
		document.getElementById('txtplacename').innerHTML = country;
	}
	else oCity_StateSel.disabled = true;
}

function print_city_state(oCountrySel, oCity_StateSel)
{
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;
	if (city_state && city_states[country].indexOf(city_state) != -1)
		document.getElementById('txtplacename').innerHTML = city_state + ', ' + country;
	else document.getElementById('txtplacename').innerHTML = country;
}