<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Address;

class AddressTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Address::create([
            'shop_id' => '1',
            'zip_code' => '060-0062',
            'state' => '北海道',
            'city' => '札幌市',
            'address' => '中央区南２条西５丁目３１ Alpha2-5 1F',
            'state_code' => '001',
            'area_id' => '1',
            'nearest_station' => '札幌市電山鼻線「資生館小学校前駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '2',
            'zip_code' => '036-8004',
            'state' => '青森県',
            'city' => '弘前市',
            'address' => '大町１丁目１４−１',
            'state_code' => '002',
            'area_id' => '3',
            'nearest_station' => 'JR「弘前駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '3',
            'zip_code' => '019-652-7272',
            'state' => '岩手県',
            'city' => '盛岡市',
            'address' => '若園町4-29',
            'state_code' => '003',
            'area_id' => '4',
            'nearest_station' => 'JR「上盛岡駅」徒歩16分'
        ]);
        Address::create([
            'shop_id' => '4',
            'zip_code' => '980-0021',
            'state' => '宮城県',
            'city' => '仙台市',
            'address' => '青葉区中央2-8-26',
            'state_code' => '004',
            'area_id' => '5',
            'nearest_station' => '仙台市営地下鉄南北線「広瀬通駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '5',
            'zip_code' => '010-0851',
            'state' => '秋田県',
            'city' => '秋田市',
            'address' => '手形蛇野１７２−３ ルピナス手形 101',
            'state_code' => '005',
            'area_id' => '6',
            'nearest_station' => 'JR「秋田駅」徒歩12分'
        ]);
        Address::create([
            'shop_id' => '6',
            'zip_code' => '991-0053',
            'state' => '山形県',
            'city' => '寒河江市',
            'address' => '元町1-19-1',
            'state_code' => '006',
            'area_id' => '7',
            'nearest_station' => 'JR「寒河江駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '7',
            'zip_code' => '963-0107',
            'state' => '福島県',
            'city' => '郡山市',
            'address' => '安積2-100',
            'state_code' => '007',
            'area_id' => '8',
            'nearest_station' => 'JR「安積永盛駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '8',
            'zip_code' => '',
            'state' => '茨城県',
            'city' => '水戸市',
            'address' => '南町2-3-32西洋倶楽部ビル1F',
            'state_code' => '008',
            'area_id' => '9',
            'nearest_station' => 'JR「水戸駅」徒歩9分'
        ]);
        Address::create([
            'shop_id' => '9',
            'zip_code' => '320-0013',
            'state' => '栃木県',
            'city' => '宇都宮市',
            'address' => '上大曽町４０２−１',
            'state_code' => '009',
            'area_id' => '10',
            'nearest_station' => 'JR「宇都宮駅」徒歩16分'
        ]);
        Address::create([
            'shop_id' => '10',
            'zip_code' => '371-0018',
            'state' => '群馬県',
            'city' => '前橋市',
            'address' => '三俣町1-14-19',
            'state_code' => '010',
            'area_id' => '11',
            'nearest_station' => '上毛電気鉄道上毛線「三俣駅」徒歩2分'
        ]);
        Address::create([
            'shop_id' => '11',
            'zip_code' => '343-0816',
            'state' => '埼玉県',
            'city' => '越谷市',
            'address' => '弥生町11-12 小澤ビル1F',
            'state_code' => '011',
            'area_id' => '13',
            'nearest_station' => '東武伊勢崎線「越谷駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '12',
            'zip_code' => '330-0802',
            'state' => '埼玉県',
            'city' => 'さいたま市',
            'address' => '大宮区宮町2-118-1モンクール宮町ビル1F',
            'state_code' => '011',
            'area_id' => '14',
            'nearest_station' => 'JR「大宮駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '13',
            'zip_code' => '',
            'state' => '千葉県',
            'city' => '柏市',
            'address' => '旭町1-4-7タクビル1F',
            'state_code' => '012',
            'area_id' => '15',
            'nearest_station' => 'JR「柏駅」徒歩2分'
        ]);
        Address::create([
            'shop_id' => '14',
            'zip_code' => '150-0001',
            'state' => '東京都',
            'city' => '渋谷区',
            'address' => '神宮前3-22-8',
            'state_code' => '013',
            'area_id' => '17',
            'nearest_station' => 'JR「原宿駅」徒歩4分'
        ]);
        Address::create([
            'shop_id' => '15',
            'zip_code' => '150-8377',
            'state' => '東京都',
            'city' => '渋谷区',
            'address' => '宇田川町15-1 渋谷パルコ3F(ウィメンズ／メンズ)',
            'state_code' => '013',
            'area_id' => '17',
            'nearest_station' => 'JR「渋谷駅」徒歩4分'
        ]);
        Address::create([
            'shop_id' => '16',
            'zip_code' => '107-0062',
            'state' => '東京都',
            'city' => '港区',
            'address' => '南青山3-6-7B-town 1F/2F',
            'state_code' => '013',
            'area_id' => '19',
            'nearest_station' => '東京メトロ千代田線「表参道駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '17',
            'zip_code' => '220-0073',
            'state' => '神奈川県',
            'city' => '横浜市',
            'address' => '西区岡野1-15-2',
            'state_code' => '014',
            'area_id' => '23',
            'nearest_station' => 'JR「横浜駅」徒歩10分'
        ]);
        Address::create([
            'shop_id' => '18',
            'zip_code' => '212-8576',
            'state' => '神奈川県',
            'city' => '川崎市',
            'address' => '幸区堀川町72-1 ラゾーナ川崎Plaza West 2F',
            'state_code' => '014',
            'area_id' => '24',
            'nearest_station' => 'JR「川崎駅」徒歩2分'
        ]);
        Address::create([
            'shop_id' => '19',
            'zip_code' => '951-8063',
            'state' => '新潟県',
            'city' => '新潟市',
            'address' => '中央区古町通5-584',
            'state_code' => '015',
            'area_id' => '25',
            'nearest_station' => 'JR「新潟駅」2km'
        ]);
        Address::create([
            'shop_id' => '20',
            'zip_code' => '937-0046',
            'state' => '富山県',
            'city' => '魚津市',
            'address' => '上村木1-17-7',
            'state_code' => '016',
            'area_id' => '26',
            'nearest_station' => 'あいの風とやま鉄道線「魚津駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '21',
            'zip_code' => '921-8813',
            'state' => '石川県',
            'city' => '野々市',
            'address' => '住吉町11-19',
            'state_code' => '017',
            'area_id' => '27',
            'nearest_station' => '北陸鉄道石川線「馬替駅」徒歩7分'
        ]);
        Address::create([
            'shop_id' => '22',
            'zip_code' => '910-0804',
            'state' => '福井県',
            'city' => '福井市',
            'address' => '高木中央2-2618',
            'state_code' => '018',
            'area_id' => '28',
            'nearest_station' => 'えちぜん鉄道三国芦原線「まつもと町屋駅」徒歩23分'
        ]);
        Address::create([
            'shop_id' => '23',
            'zip_code' => '400-0032',
            'state' => '山梨県',
            'city' => '甲府市',
            'address' => '中央4-8-8甲府中央マンション102',
            'state_code' => '019',
            'area_id' => '29',
            'nearest_station' => 'JR「金手駅」徒歩10分'
        ]);
        Address::create([
            'shop_id' => '24',
            'zip_code' => '380-0823',
            'state' => '長野県',
            'city' => '長野市',
            'address' => '南千歳２丁目１５−８',
            'state_code' => '020',
            'area_id' => '31',
            'nearest_station' => 'JR「長野駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '25',
            'zip_code' => '506-0004',
            'state' => '岐阜県',
            'city' => '高山市',
            'address' => '桐生町４丁目４５２',
            'state_code' => '021',
            'area_id' => '33',
            'nearest_station' => 'JR「高山駅」徒歩20分'
        ]);
        Address::create([
            'shop_id' => '26',
            'zip_code' => '422-8057',
            'state' => '静岡県',
            'city' => '静岡市',
            'address' => '駿河区見瀬278-1ART2F',
            'state_code' => '022',
            'area_id' => '34',
            'nearest_station' => 'JR「静岡駅」徒歩18分'
        ]);
        Address::create([
            'shop_id' => '27',
            'zip_code' => '486-0851',
            'state' => '愛知県',
            'city' => '春日井市',
            'address' => '篠木町7-24-13',
            'state_code' => '023',
            'area_id' => '36',
            'nearest_station' => 'JR「神領駅」徒歩17分'
        ]);
        Address::create([
            'shop_id' => '28',
            'zip_code' => '510-0064',
            'state' => '三重県',
            'city' => '四日市',
            'address' => '新正4-5-21新正駅前ビル1F',
            'state_code' => '024',
            'area_id' => '38',
            'nearest_station' => '近鉄名古屋線「新正駅」徒歩0分'
        ]);
        Address::create([
            'shop_id' => '29',
            'zip_code' => '520-0802',
            'state' => '滋賀県',
            'city' => '大津市',
            'address' => '馬場1-3-8小川ビル1F',
            'state_code' => '025',
            'area_id' => '39',
            'nearest_station' => 'JR「膳所駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '30',
            'zip_code' => '606-0842',
            'state' => '京都府',
            'city' => '京都市',
            'address' => '左京区下鴨北芝町34',
            'state_code' => '026',
            'area_id' => '40',
            'nearest_station' => '京都市営地下鉄烏丸線「北山駅」徒歩2分'
        ]);
        Address::create([
            'shop_id' => '31',
            'zip_code' => '530-0014',
            'state' => '大阪府',
            'city' => '大阪市',
            'address' => '北区鶴野町2-8鶴野ビル2F',
            'state_code' => '027',
            'area_id' => '42',
            'nearest_station' => '阪急京都本線「大阪梅田駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '32',
            'zip_code' => '530-0001',
            'state' => '大阪府',
            'city' => '大阪市',
            'address' => '北区梅田3-1-3 ルクア大阪ルクア 5F',
            'state_code' => '027',
            'area_id' => '43',
            'nearest_station' => 'JR「大阪駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '33',
            'zip_code' => '650-0001',
            'state' => '兵庫県',
            'city' => '神戸市',
            'address' => '中央区加納町2-3-7ドミール北野 103号',
            'state_code' => '028',
            'area_id' => '46',
            'nearest_station' => 'JR「三ノ宮駅」徒歩7分'
        ]);
        Address::create([
            'shop_id' => '34',
            'zip_code' => '630-8233',
            'state' => '奈良県',
            'city' => '奈良市',
            'address' => '小川町3-1 1F',
            'state_code' => '029',
            'area_id' => '48',
            'nearest_station' => 'JR「奈良駅」徒歩8分'
        ]);
        Address::create([
            'shop_id' => '35',
            'zip_code' => '640-8151',
            'state' => '和歌山県',
            'city' => '和歌山市',
            'address' => '十一番町28',
            'state_code' => '030',
            'area_id' => '49',
            'nearest_station' => '紀勢本線(和歌山～和歌山市)「和歌山市駅」徒歩12分'
        ]);
        Address::create([
            'shop_id' => '36',
            'zip_code' => '680-0822',
            'state' => '鳥取県',
            'city' => '鳥取市',
            'address' => '今町1-173-4',
            'state_code' => '031',
            'area_id' => '50',
            'nearest_station' => 'JR「鳥取駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '37',
            'zip_code' => '',
            'state' => '島根県',
            'city' => '松江市',
            'address' => '学園南2-12-5HOYOパークサイドビル 1F',
            'state_code' => '032',
            'area_id' => '51',
            'nearest_station' => 'JR「松江駅」徒歩14分'
        ]);
        Address::create([
            'shop_id' => '38',
            'zip_code' => '700-0826',
            'state' => '岡山県',
            'city' => '岡山市',
            'address' => '北区磨屋町9-26 2F',
            'state_code' => '033',
            'area_id' => '52',
            'nearest_station' => '岡山電軌清輝橋線「郵便局前駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '39',
            'zip_code' => '721-0907',
            'state' => '広島県',
            'city' => '福山市',
            'address' => '春日町1-1-45',
            'state_code' => '034',
            'area_id' => '54',
            'nearest_station' => 'JR「東福山駅」徒歩14分'
        ]);
        Address::create([
            'shop_id' => '40',
            'zip_code' => '745-0017',
            'state' => '山口県',
            'city' => '周南市',
            'address' => '新町2-10 2F',
            'state_code' => '035',
            'area_id' => '56',
            'nearest_station' => 'JR「徳山駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '41',
            'zip_code' => '770-0856',
            'state' => '徳島県',
            'city' => '徳島市',
            'address' => '中洲町3-19-1里見第二ビル 106号',
            'state_code' => '036',
            'area_id' => '57',
            'nearest_station' => 'JR「阿波富田駅」徒歩8分'
        ]);
        Address::create([
            'shop_id' => '42',
            'zip_code' => '760-0025',
            'state' => '香川県',
            'city' => '高松市',
            'address' => '古新町10-3スナヤビル 1F',
            'state_code' => '037',
            'area_id' => '58',
            'nearest_station' => '琴電長尾線「片原町駅」徒歩4分'
        ]);
        Address::create([
            'shop_id' => '43',
            'zip_code' => '790-0004',
            'state' => '愛媛県',
            'city' => '松山市',
            'address' => '大街道2-5-15 アエル松山 アエル 松山 1F',
            'state_code' => '038',
            'area_id' => '59',
            'nearest_station' => '伊予鉄道3系統「大街道駅」徒歩0分、「県庁前駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '44',
            'zip_code' => '780-0822',
            'state' => '高知県',
            'city' => '高知市',
            'address' => 'はりまや町1-6-15',
            'state_code' => '039',
            'area_id' => '60',
            'nearest_station' => '土佐電鉄ごめん線「はりまや橋駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '45',
            'zip_code' => '802-0001',
            'state' => '福岡県',
            'city' => '北九州市',
            'address' => '小倉北区浅野1-1-1 アミュプラザ小倉西館2階',
            'state_code' => '040',
            'area_id' => '61',
            'nearest_station' => 'JR「小倉駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '46',
            'zip_code' => '810-0041',
            'state' => '福岡県',
            'city' => '福岡市',
            'address' => '中央区大名1-1-9 1F',
            'state_code' => '040',
            'area_id' => '61',
            'nearest_station' => '西鉄天神大牟田線「西鉄福岡（天神）駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '47',
            'zip_code' => '840-0834',
            'state' => '佐賀県',
            'city' => '佐賀市',
            'address' => '八幡小路-2-13 1F',
            'state_code' => '041',
            'area_id' => '64',
            'nearest_station' => 'JR「佐賀駅」徒歩13分'
        ]);
        Address::create([
            'shop_id' => '48',
            'zip_code' => '850-0852',
            'state' => '長崎県',
            'city' => '長崎市',
            'address' => '万屋町3-22 1F',
            'state_code' => '042',
            'area_id' => '65',
            'nearest_station' => '長崎電軌5系統「めがね橋駅」徒歩1分、「浜町アーケード駅」徒歩2分'
        ]);
        Address::create([
            'shop_id' => '49',
            'zip_code' => '860-0848',
            'state' => '熊本県',
            'city' => '熊本市',
            'address' => '中央区南坪井町5-27-1ロマージュ上通並木坂 2F NF号',
            'state_code' => '043',
            'area_id' => '67',
            'nearest_station' => '熊本電鉄本線「藤崎宮前駅」徒歩1分'
        ]);
        Address::create([
            'shop_id' => '50',
            'zip_code' => '870-0021',
            'state' => '大分県',
            'city' => '大分市',
            'address' => '府内町2-1-4 大分トキハ本館 4F',
            'state_code' => '044',
            'area_id' => '68',
            'nearest_station' => 'JR「大分駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '51',
            'zip_code' => '880-0001',
            'state' => '宮崎県',
            'city' => '宮崎市',
            'address' => '橘通西3-10-2 3F',
            'state_code' => '045',
            'area_id' => '69',
            'nearest_station' => 'JR「宮崎駅」徒歩11分'
        ]);
        Address::create([
            'shop_id' => '52',
            'zip_code' => '892-0842',
            'state' => '鹿児島県',
            'city' => '鹿児島市',
            'address' => '東千石町18-1ミッドランドアパート201',
            'state_code' => '046',
            'area_id' => '70',
            'nearest_station' => '鹿児島市電2系統「天文館通駅」徒歩2分、「いづろ通駅」徒歩4分'
        ]);
        Address::create([
            'shop_id' => '53',
            'zip_code' => '900-0006',
            'state' => '沖縄県',
            'city' => '那覇市',
            'address' => 'おもろまち4-6-17おもろパークテラス1-3',
            'state_code' => '047',
            'area_id' => '72',
            'nearest_station' => '沖縄都市モノレール線「おもろまち駅」徒歩6分'
        ]);
        Address::create([
            'shop_id' => '54',
            'zip_code' => '151-0051',
            'state' => '東京都',
            'city' => '渋谷区',
            'address' => '千駄ヶ谷5-24-2 新宿タカシマヤ8階',
            'state_code' => '013',
            'area_id' => '16',
            'nearest_station' => 'JR「新宿駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '55',
            'zip_code' => '220-0005',
            'state' => '神奈川県',
            'city' => '横浜市',
            'address' => '西区南幸1-5-1 横浜相鉄ジョイナス 1F',
            'state_code' => '014',
            'area_id' => '23',
            'nearest_station' => 'JR「横浜駅」徒歩3分'
        ]);
        Address::create([
            'shop_id' => '56',
            'zip_code' => '460-0008',
            'state' => '愛知県',
            'city' => '名古屋市',
            'address' => '中区栄3-15-27',
            'state_code' => '023',
            'area_id' => '36',
            'nearest_station' => '名古屋市営地下鉄名城線「矢場町駅」徒歩3分、「栄駅」徒歩5分'
        ]);
        Address::create([
            'shop_id' => '57',
            'zip_code' => '810-0001',
            'state' => '福岡県',
            'city' => '福岡市',
            'address' => '中央区天神２丁目５−１６ TENJIN216',
            'state_code' => '040',
            'area_id' => '61',
            'nearest_station' => 'JR 福岡駅 8分'
        ]);


        // Address::create([
        //     'shop_id' => '1',
        //     'zip_code' => '211-009',
        //     'state' => '東京都',
        //     'city' => '港区',
        //     'address' => '南青山５丁目１２−２４ シャトー東洋南青山',
        //     'area_id' => '1',
        //     'state_code' => '1',
        //     'nearest_station' => '東急東横線自由ヶ丘駅'
        // ]);

    }
}
