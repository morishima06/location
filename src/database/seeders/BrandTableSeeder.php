<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;


class BrandTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Brand::create([
            'name' => 'ADIDAS',
            'katakana' => 'アディダス',
            'hiragana' => 'あでぃだす',
            'initial' => 'A'
        ]);
        Brand::create([
            'name' => 'APC',
            'katakana' => 'アーペーセー',
            'hiragana' => 'あーぺーせー',
            'initial' => 'A'
        ]);
        Brand::create([
            'name' => 'AMBSUH',
            'katakana' => 'アンブッシュ',
            'hiragana' => 'あんぶっしゅ',
            'initial' => 'A'
        ]);
        Brand::create([
            'name' => 'BALENCIAGA',
            'katakana' => 'バレンシアガ',
            'hiragana' => 'ばれんしあが',
            'initial' => 'B'
        ]);
        Brand::create([
            'name' => 'BURBERRY',
            'katakana' => 'バーバリー',
            'hiragana' => 'ばーばりー',
            'initial' => 'B'
        ]);
        Brand::create([
            'name' => 'CONVERSE',
            'katakana' => 'コンバース',
            'hiragana' => 'こんばーす',
            'initial' => 'C'
        ]);
        Brand::create([
            'name' => 'CELINE',
            'katakana' => 'セリーヌ',
            'hiragana' => 'せりーぬ',
            'initial' => 'C'
        ]);
        Brand::create([
            'name' => 'CE',
            'katakana' => 'シーイー',
            'hiragana' => 'しーいー',
            'initial' => 'C'
        ]);
        Brand::create([
            'name' => 'CANADA GOOSE',
            'katakana' => 'カナダグース',
            'hiragana' => 'かなだぐーす',
            'initial' => 'C'
        ]);
        
        Brand::create([
            'name' => 'DIESEL',
            'katakana' => 'ディーゼル',
            'hiragana' => 'でぃーぜる',
            'initial' => 'D'
        ]);
        Brand::create([
            'name' => 'EMPORIO ARMANI',
            'katakana' => 'エンポリオアルマーニ',
            'hiragana' => 'えんぽりおあるまーに',
            'initial' => 'E'
        ]);
        Brand::create([
            'name' => 'FRED PERR',
            'katakana' => 'フレッドペリー',
            'hiragana' => 'ふれっどぺりー',
            'initial' => 'F'
        ]);
        Brand::create([
            'name' => 'GUESS',
            'katakana' => 'ゲス',
            'hiragana' => 'げす',
            'initial' => 'G'
        ]);
        Brand::create([
            'name' => 'HUF',
            'katakana' => 'ハフ',
            'hiragana' => 'はふ',
            'initial' => 'H'
        ]);
        Brand::create([
            'name' => 'J CREW',
            'katakana' => 'ジェイクルー',
            'hiragana' => 'じぇいくるー',
            'initial' => 'J'
        ]);
        Brand::create([
            'name' => 'JIL SANDER',
            'katakana' => 'ジルサンダー',
            'hiragana' => 'じるさんだー',
            'initial' => 'J'
        ]);
        Brand::create([
            'name' => 'KENZO',
            'katakana' => 'ケンゾー',
            'hiragana' => 'けんぞー',
            'initial' => 'K'
        ]);
        Brand::create([
            'name' => 'LACOSTE',
            'katakana' => 'ラコステ',
            'hiragana' => 'らこすて',
            'initial' => 'L'
        ]);
        Brand::create([
            'name' => 'MAISON KITUNE',
            'katakana' => 'メゾンキツネ',
            'hiragana' => 'めぞんきつね',
            'initial' => 'M'
        ]);
        Brand::create([
            'name' => 'MARNI',
            'katakana' => 'マルニ',
            'hiragana' => 'まるに',
            'initial' => 'M'
        ]);
        Brand::create([
            'name' => 'MONCLER',
            'katakana' => 'モンクレール',
            'hiragana' => 'もんくれーる',
            'initial' => 'M'
        ]);
        Brand::create([
            'name' => 'Maison Margiela',
            'katakana' => 'メゾン マルジェラ',
            'hiragana' => 'めぞんまるじぇら',
            'initial' => 'M'
        ]);
        Brand::create([
            'name' => 'N.HOOLYWOOD',
            'katakana' => 'エヌハリウッド',
            'hiragana' => 'えぬはりうっど',
            'initial' => 'N'
        ]);
        Brand::create([
            'name' => 'NEIGHBORHOOD',
            'katakana' => 'ネイバーフッド',
            'hiragana' => 'ねいばーふっど',
            'initial' => 'N'
        ]);
        Brand::create([
            'name' => 'New Balance',
            'katakana' => 'ニューバランス',
            'hiragana' => 'にゅーばらんす',
            'initial' => 'N'
        ]);
        Brand::create([
            'name' => 'OAMC',
            'katakana' => 'オーエーエムシー',
            'hiragana' => 'おーえーえむしー',
            'initial' => 'O'
        ]);
        Brand::create([
            'name' => 'PUMA',
            'katakana' => 'プーマ',
            'hiragana' => 'ぷーま',
            'initial' => 'P'
        ]);
        Brand::create([
            'name' => 'REEBOK',
            'katakana' => 'リーボック',
            'hiragana' => 'りーぼっく',
            'initial' => 'R'
        ]);
        Brand::create([
            'name' => 'SUPREME',
            'katakana' => 'シュプリーム',
            'hiragana' => 'しゅぷりーむ',
            'initial' => 'S'
        ]);
        Brand::create([
            'name' => 'SUTUSSY',
            'katakana' => 'シュテューシー',
            'hiragana' => 'しゅてゅーしー',
            'initial' => 'S'
        ]);
        Brand::create([
            'name' => 'SOPH',
            'katakana' => 'ソフ',
            'hiragana' => 'そふ',
            'initial' => 'S'
        ]);
        
        Brand::create([
            'name' => 'THE NORTH FACE',
            'katakana' => 'ザノースフェイス',
            'hiragana' => 'ざのーすふぇいす',
            'initial' => 'T'
        ]);
        Brand::create([
            'name' => 'UNDER COVER',
            'katakana' => 'アンダーカバー',
            'hiragana' => 'あんだーかばー',
            'initial' => 'U'
        ]);
        Brand::create([
            'name' => 'VANS',
            'katakana' => 'バンズ',
            'hiragana' => 'ばんず',
            'initial' => 'V'
        ]);
        Brand::create([
            'name' => 'White Mountaineering',
            'katakana' => 'ホワイトマウンテニアリング',
            'hiragana' => 'ほわいとまうんてにありんぐ',
            'initial' => 'W'
        ]);
        
        Brand::create([
            'name' => 'Y-3',
            'katakana' => 'ワイスリー',
            'hiragana' => 'わいすりー',
            'initial' => 'Y'
        ]);
    }
}
