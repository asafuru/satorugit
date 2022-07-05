/*
headerにあるbuttonと
サイドバーにあるbuttonにそれぞれjs用のクラス
js-switchを与えておく
js-switchのボタンをクリックしたと同時に
is-openのクラスがそれぞれのボタンに付与され
スイッチがオンの状態
スイッチがオンの状態になるとis-openのクラスに記述された
cssのスタイルが適応されてサイドバー出現
サイドバーはZ指定してあるのでheaderは隠れる
サイドバーのbuttonをクリックすると
header、sidebarのis-openが取り除かれ
sidebarが引っ込む
*/

$(function(){
  $(".js-switch").click(function(){
    $(".l-sidebar").toggleClass("is-open")
  });
});

