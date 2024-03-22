//スプレッドシートからデータ取得してwebアプリケーション上に表示
function doGet() {

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data").activate();
  let template = HtmlService.createTemplateFromFile('index');

  // 1から109までのランダムな整数を生成
  let randomNumber = Math.floor(Math.random() * 109);
  let question_data = SpreadsheetApp.getActiveSheet().getRange(randomNumber, 4).getValue();
  let answer_data = SpreadsheetApp.getActiveSheet().getRange(randomNumber, 5).getValue();
  let choice_data = SpreadsheetApp.getActiveSheet().getRange(randomNumber, 9).getValue();
  let result_data = SpreadsheetApp.getActiveSheet().getRange(randomNumber, 8).getValue();

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("write_data").activate();

  let sheet1 =SpreadsheetApp.getActiveSpreadsheet().getSheetByName("write_data"); 

  sheet1.getRange(3,3).setValues([[result_data]]);


  template.question_data = question_data; // データをテンプレートに渡す
  template.answer_data = answer_data; // データをテンプレートに渡す
  template.choice_data = choice_data; // データをテンプレートに渡す

  return template.evaluate();
}



//webアプリケーションから取得したデータしてスプレッドシートに書き込む
function doPost(e){
  let selectedButton = e.parameter.selectedButton;

  let data = parseInt(selectedButton, 10);


  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("write_data").activate();

  let sheet2 =SpreadsheetApp.getActiveSpreadsheet().getSheetByName("write_data"); 

  sheet2.getRange(3,2).setValues([[data]]);

}
