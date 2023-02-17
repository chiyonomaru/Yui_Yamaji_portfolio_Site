
function particleTextAnime() {

$("#particle").particleText({
		text: "poster", // 表示させたいテキスト。改行の場合は<br>追加
		colors:["#444"], // パーティクルの色を複数指定可能
		speed: "high",  // slow, middle, high の3つから粒子が集まる速さを選択
	});
}
