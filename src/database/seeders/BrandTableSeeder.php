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
            'name' => 'A.P.C',
            'katakana' => 'アーペーセー',
            'hiragana' => 'あーぺーせー',
            'initial' => 'A'
        ]);
        Brand::create([
            'name' => 'AMBSuH',
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
            'name' => 'Burberry',
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
            'name' => 'Guess',
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
            'name' => 'J Crew',
            'katakana' => 'ジェイクルー',
            'hiragana' => 'じぇいくるー',
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
            'name' => 'Neighborhood',
            'katakana' => 'ネイバーフッド',
            'hiragana' => 'ねいばーふっど',
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
            'name' => 'Reebok',
            'katakana' => 'リーボック',
            'hiragana' => 'りーぼっく',
            'initial' => 'R'
        ]);
        Brand::create([
            'name' => 'Supreme',
            'katakana' => 'シュプリーム',
            'hiragana' => 'しゅぷりーむ',
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
            'name' => 'Y-3',
            'katakana' => 'ワイスリー',
            'hiragana' => 'わいすりー',
            'initial' => 'Y'
        ]);
    }
}
