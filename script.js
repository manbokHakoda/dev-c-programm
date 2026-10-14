const lessons = [
{title:"C хэлтэй танилцах",heading:"C хэл гэж юу вэ?",desc:"C бол компьютерт хийх үйлдлийг зааж өгдөг програмчлалын хэл. Бид түүнд команд бичиж, компьютерээр ажил гүйцэтгүүлнэ.",tip:"Програм гэдэг нь компьютерт өгсөн дараалсан заавар юм. Эхлээд жижиг програм бичээд, дараа нь илүү том зүйл бүтээнэ.",code:'#include <stdio.h>\n\nint main() {\n    printf("Сайн байна уу, C хэл!");\n    return 0;\n}',explain:["#include <stdio.h> — дэлгэцэд хэвлэх зэрэг стандарт оролт, гаралтын хэрэгслийг ашиглана.","int main() — програмын үндсэн функц.","printf(...) — хаалт доторх текстийг дэлгэцэд хэвлэнэ.","return 0; — програм амжилттай дууссаныг илэрхийлнэ."],challenge:"Текст доторх “Сайн байна уу, C хэл!” гэдгийг өөрийн хүссэн мэндчилгээгээр солиорой.",out:"Сайн байна уу, C хэл!",q:"printf() ямар үүрэгтэй вэ?",opts:["Хэрэглэгчээс тоо авна.","Дэлгэцэд текст гаргана.","Програмыг давтана."],correct:1,why:"printf() нь мэдээллийг дэлгэцэд хэвлэхэд ашиглагддаг."},
{title:"Эхний програм",heading:"Програмын бүтэц",desc:"C програм тодорхой бүтэцтэй. Командууд ихэвчлэн main функц дотор бичигддэг бөгөөд олон командын төгсгөлд цэгтэй таслал тавина.",tip:"Нэг жижиг алдаа ч програмд нөлөөлж болно. Хаалт, цэгтэй таслал, үсгийн том жижиг ялгааг анзаараарай.",code:'#include <stdio.h>\nint main() {\n    printf("Миний эхний програм");\n    return 0;\n}',explain:["include мөр нь стандарт санг холбоно.","main() функцээс програмын үндсэн ажил эхэлнэ.","{ } хаалт нь функцийн биеийг заана.","Командын төгсгөлд ; тавина."],challenge:"Дэлгэцэд хоёр мөр текст гаргахын тулд хоёр printf() команд нэмээрэй.",out:"Миний эхний програм",q:"C хэлэнд командын төгсгөлд ихэвчлэн юу тавьдаг вэ?",opts:["Цэгтэй таслал ;","Таслал ,","Асуултын тэмдэг ?"],correct:0,why:"Ихэнх C хэлний командын төгсгөлд ; хэрэглэдэг."},
{title:"Хувьсагч, өгөгдлийн төрөл",heading:"Хувьсагч гэж юу вэ?",desc:"Хувьсагчийг мэдээлэл хадгалдаг нэртэй хайрцаг гэж төсөөл. Жишээ нь нас, оноо, дундаж зэрэг утгыг хадгалж болно.",tip:"int нь бүхэл тоо, float нь бутархай тоо, char нь нэг тэмдэгт хадгалахад түгээмэл хэрэглэгдэнэ.",code:'#include <stdio.h>\nint main() {\n    int nas = 16;\n    float dun = 89.5;\n    printf("%d\\n", nas);\n    printf("%.1f", dun);\n    return 0;\n}',explain:["int nas = 16; — nas нэртэй бүхэл тоон хувьсагч үүсгэв.","float dun = 89.5; — бутархай тоо хадгалав.","%d нь int утгыг хэвлэнэ.","%.1f нь таслалаас хойш нэг оронтой хэвлэнэ."],challenge:"Өөрийн нас эсвэл дурын оноог хувьсагчид хадгалж хэвлээрэй.",out:"16\n89.5",q:"Бүхэл тоо хадгалахад аль төрөл тохирох вэ?",opts:["int","float","char"],correct:0,why:"int нь бүхэл тоон утгад зориулагдсан."},
{title:"printf() – дэлгэцэд хэвлэх",heading:"Мэдээлэл хэвлэх",desc:"printf() ашиглан үг, өгүүлбэр, хувьсагчийн утгыг дэлгэцэд харуулна. \\n нь дараагийн мөрөнд шилжүүлнэ.",tip:"Текстийг давхар хашилтад бичнэ. Хувьсагч хэвлэхдээ тохирох формат (%d, %f, %c) хэрэглээрэй.",code:'#include <stdio.h>\nint main() {\n    printf("Сайн уу!\\n");\n    printf("C хэл сурч байна.");\n    return 0;\n}',explain:["printf(\"Сайн уу!\\n\"); — эхний мөрийг хэвлэнэ.","\\n нь шинэ мөр үүсгэнэ.","Дараагийн printf() шинэ мөрөнд үргэлжлүүлнэ."],challenge:"Нэр болон дуртай хичээлээ тус тусад нь хоёр мөр болгон хэвлээрэй.",out:"Сайн уу!\nC хэл сурч байна.",q:"\\n тэмдэглэгээ ямар үүрэгтэй вэ?",opts:["Шинэ мөрөнд шилжинэ.","Тоо үржүүлнэ.","Програм дуусгана."],correct:0,why:"\\n нь мөр шилжүүлэх escape тэмдэглэгээ юм."},
{title:"scanf() – оролт авах",heading:"Хэрэглэгчээс мэдээлэл авах",desc:"scanf() нь гараас утга авахад хэрэглэгдэнэ. Жишээ нь сурагч нас эсвэл хоёр тоо оруулж болно.",tip:"Хувьсагчийн хаягийг өгөхийн тулд ихэнх энгийн хувьсагч дээр & тэмдэг хэрэглэнэ.",code:'#include <stdio.h>\nint main() {\n    int nas;\n    printf("Насаа оруул: ");\n    scanf("%d", &nas);\n    printf("Таны нас: %d", nas);\n    return 0;\n}',explain:["int nas; — утга хадгалах хувьсагч зарлав.","scanf(\"%d\", &nas); — бүхэл тоо уншина.","&nas нь хувьсагчийн санах ойн хаягийг заана.","printf() оруулсан утгыг буцааж харуулна."],challenge:"Хэрэглэгчээс дуртай тоог нь аваад дэлгэцэд хэвлэдэг програм бичээрэй.",out:"Жишээ оролт: 16\nТаны нас: 16",q:"scanf(\"%d\", &a) доторх &a юу заадаг вэ?",opts:["a хувьсагчийн хаяг","a хувьсагчийн нэрийг устгах","Дэлгэцийн өнгө"],correct:0,why:"scanf утгыг a хувьсагчид хадгалахын тулд хаягийг нь авдаг."},
{title:"Формат тодорхойлогч",heading:"%d, %f, %c гэж юу вэ?",desc:"Формат тодорхойлогч нь ямар төрлийн өгөгдөл унших эсвэл хэвлэхийг заана.",tip:"int → %d, float/double хэвлэхэд ихэвчлэн %f, char → %c, мөр → %s хэрэглэнэ. double-ийг scanf() авахдаа %lf ашиглана.",code:'#include <stdio.h>\nint main() {\n    int too = 12;\n    float undur = 1.7;\n    char useg = \'A\';\n    printf("%d\\n", too);\n    printf("%.1f\\n", undur);\n    printf("%c", useg);\n    return 0;\n}',explain:["%d нь бүхэл тоонд тохирно.","%.1f нь бутархай тоог нэг орны нарийвчлалтай харуулна.","%c нь нэг тэмдэгт хэвлэнэ."],challenge:"int, float, char гурван хувьсагч үүсгээд тус бүрийг зөв форматтай хэвлээрэй.",out:"12\n1.7\nA",q:"char төрлийн утгыг хэвлэх формат аль вэ?",opts:["%d","%c","%lf"],correct:1,why:"%c нь нэг тэмдэгтэд зориулагдсан."},
{title:"Арифметик үйлдэл",heading:"Тооцоолол хийх",desc:"C хэлэнд нэмэх, хасах, үржүүлэх, бүхэл хуваах, үлдэгдэл олох үйлдлүүд бий.",tip:"+ нэмэх, - хасах, * үржүүлэх, / хуваах, % бүхэл тооны үлдэгдэл олно.",code:'#include <stdio.h>\nint main() {\n    int a = 10, b = 3;\n    printf("Нийлбэр = %d\\n", a + b);\n    printf("Үржвэр = %d\\n", a * b);\n    printf("Үлдэгдэл = %d", a % b);\n    return 0;\n}',explain:["a + b нь хоёр утгыг нэмнэ.","a * b нь үржүүлнэ.","a % b нь 10-ыг 3-т хуваахад үлдэх 1-ийг олно."],challenge:"Хоёр тооны нийлбэр, ялгавар, үржвэрийг хэвлэдэг програм бичээрэй.",out:"Нийлбэр = 13\nҮржвэр = 30\nҮлдэгдэл = 1",q:"17 % 5 хэд вэ?",opts:["3","2","12"],correct:1,why:"17 = 5×3 + 2 тул үлдэгдэл нь 2."},
{title:"math.h – тооцоолол",heading:"Математикийн функц",desc:"math.h сан нь квадрат язгуур зэрэг математик үйлдэл хийх функцүүдтэй.",tip:"sqrt(x) нь квадрат язгуур, pow(a,b) нь a-г b зэрэгт дэвшүүлнэ. Зарим орчинд компайл хийх тохиргоо шаардлагатай байж болно.",code:'#include <stdio.h>\n#include <math.h>\nint main() {\n    double a = 25;\n    printf("%.0f", sqrt(a));\n    return 0;\n}',explain:["#include <math.h> нь математик функцүүдийг ашиглах боломж өгнө.","double нь бодит тоон утга хадгална.","sqrt(25) нь 5 гэсэн үр дүнтэй."],challenge:"sqrt() ашиглан 81-ийн квадрат язгуурыг хэвлээрэй.",out:"5",q:"pow(2, 3) ямар утга гаргах вэ?",opts:["5","6","8"],correct:2,why:"2³ = 2×2×2 = 8."},
{title:"if – нөхцөл",heading:"Нөхцөл шалгах",desc:"if нь нөхцөл үнэн үед тодорхой командыг ажиллуулна. Жишээ нь тоо тэгээс их эсэхийг шалгана.",tip:"Харьцуулахдаа == тэнцүү, != тэнцүү биш, > их, < бага гэсэн тэмдэг ашиглана.",code:'#include <stdio.h>\nint main() {\n    int a = 7;\n    if (a > 0) {\n        printf("Эерэг тоо");\n    }\n    return 0;\n}',explain:["a = 7 утгыг хувьсагчид хадгална.","if (a > 0) нөхцөлийг шалгана.","7 нь 0-ээс их учир printf() ажиллана."],challenge:"a нь 100-аас их үед “Их тоо” гэж хэвлэдэг нөхцөл бичээрэй.",out:"Эерэг тоо",q:"if (a > 0) нөхцөл юуг шалгаж байна вэ?",opts:["a тэгтэй тэнцүү эсэх","a тэгээс их эсэх","a сөрөг эсэх"],correct:1,why:"> тэмдэг нь зүүн талын утга баруунаасаа их эсэхийг шалгана."},
{title:"else – өөр нөхцөл",heading:"if ба else",desc:"if нөхцөл худал бол else хэсэг ажиллана. Ингэснээр хоёр боломжит үр дүнгийн аль нэгийг сонгож болно.",tip:"Эерэг, сөрөг, тэг гэсэн гурван тохиолдол шалгах бол if, else if, else ашиглаж болно.",code:'#include <stdio.h>\nint main() {\n    int a = -4;\n    if (a >= 0) {\n        printf("Эерэг эсвэл тэг");\n    } else {\n        printf("Сөрөг тоо");\n    }\n    return 0;\n}',explain:["a нь -4 утгатай.","a >= 0 нөхцөл худал байна.","Тиймээс else хэсэг ажиллаж “Сөрөг тоо” хэвлэнэ."],challenge:"Нас 18-аас бага бол “Насанд хүрээгүй”, бусад үед “Насанд хүрсэн” гэж хэвлээрэй.",out:"Сөрөг тоо",q:"if нөхцөл худал бол else юу хийх вэ?",opts:["Заавал алдаа өгнө.","else хэсгийн командыг ажиллуулна.","Програмыг устгана."],correct:1,why:"else нь if нөхцөл худал үед ажиллана."},
{title:"Нөхцөлт бодлого",heading:"Оноогоор үнэлгээ гаргах",desc:"Нөхцөл ашиглан бодит асуудлыг шийдэж болно. Жишээ нь онооноос хамаарч тэнцсэн эсэхийг харуулна.",tip:"Нөхцөлүүдийг тодорхой дарааллаар шалга. Илүү өндөр босгыг эхэлж шалгах нь олон шатлалтай үнэлгээнд хэрэгтэй.",code:'#include <stdio.h>\nint main() {\n    int ono = 85;\n    if (ono >= 90) printf("A");\n    else if (ono >= 80) printf("B");\n    else if (ono >= 60) printf("C");\n    else printf("Дахин давт");\n    return 0;\n}',explain:["ono хувьсагчид 85 хадгалсан.","90-ээс их эсэхийг эхлээд шалгана — худал.","80-аас их буюу тэнцүү тул B хэвлэнэ.","Нэг нөхцөл биелсний дараах else if хэсгүүдийг алгасна."],challenge:"70 ба түүнээс дээш оноотой бол “Тэнцсэн”, бусад тохиолдолд “Дахин оролдоорой” гэж хэвлээрэй.",out:"B",q:"ono = 85 үед жишээ код ямар үнэлгээ гаргах вэ?",opts:["A","B","C"],correct:1,why:"85 нь 80-аас их буюу тэнцүү, харин 90 хүрэхгүй."},
{title:"Оролт, гаралт (даалгавар)",heading:"Хоёр тооны нийлбэр",desc:"Оролт авч, тооцоолол хийгээд үр дүн гаргах нь олон програмын үндсэн загвар юм.",tip:"Эхлээд хувьсагчаа зарла, дараа нь scanf()-аар утга авч, үйлдэл хийгээд printf()-аар хэвлэ.",code:'#include <stdio.h>\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d", a + b);\n    return 0;\n}',explain:["int a, b; — хоёр бүхэл тоон хувьсагч зарлана.","scanf() хоёр тоо уншина.","a + b нийлбэрийг бодно.","printf() үр дүнг дэлгэцэд гаргана."],challenge:"Нийлбэрийн оронд хоёр тооны ялгаврыг гаргаж өөрчлөөрэй.",out:"Жишээ оролт: 4 6\nГаралт: 10",q:"Оролт 4 ба 6 байвал a+b хэд вэ?",opts:["24","2","10"],correct:2,why:"4 + 6 = 10."},
{title:"for – давталт",heading:"Үйлдлийг олон удаа давтах",desc:"for давталт нь ижил үйлдлийг тоолсон давталтаар гүйцэтгэхэд тохиромжтой.",tip:"for (эхлэл; нөхцөл; өөрчлөлт) гэсэн бүтэцтэй. i++ нь i-г нэгээр нэмэгдүүлнэ.",code:'#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    return 0;\n}',explain:["int i = 1 — тоолуур 1-ээс эхэлнэ.","i <= 5 — 5 хүртэл давтана.","i++ — давталт бүрийн дараа i-г 1-ээр нэмнэ.","printf() одоогийн i-г хэвлэнэ."],challenge:"1-ээс 10 хүртэлх бүх тоог хэвлэдэг болгоорой.",out:"1 2 3 4 5",q:"i++ ямар үйлдэл вэ?",opts:["i-г нэгээр нэмнэ.","i-г тэг болгоно.","i-г нэгээр хасна."],correct:0,why:"++ оператор нь утгыг нэгээр нэмэгдүүлдэг."},
{title:"while – давталт",heading:"Нөхцөл биелж байхад давтах",desc:"while нь нөхцөл үнэн хэвээр байгаа хугацаанд командыг давтан ажиллуулна.",tip:"Давталтын дотор нөхцөлд нөлөөлөх хувьсагчийг өөрчлөхөө мартвал төгсгөлгүй давталт үүсч болно.",code:'#include <stdio.h>\nint main() {\n    int i = 1;\n    while (i <= 3) {\n        printf("%d ", i);\n        i++;\n    }\n    return 0;\n}',explain:["i-г 1 гэж эхлүүлнэ.","i <= 3 нөхцөл үнэн бол давталт ажиллана.","i-г хэвлэсний дараа i++ нэмэгдүүлнэ.","i 4 болоход нөхцөл худал болж дуусна."],challenge:"while ашиглан 1-ээс 5 хүртэл хэвлээрэй.",out:"1 2 3",q:"while давталт хэзээ зогсох вэ?",opts:["Нөхцөл худал болоход","Заавал нэг удаа ажиллаад","Компьютер унтрахад"],correct:0,why:"while-ийн нөхцөл худал болмогц давталт дуусна."},
{title:"Давталтын бодлого",heading:"Нийлбэр олох",desc:"Давталтыг тоо хэвлэхээс гадна олон утгыг нэмж нийлбэр гаргахад ашиглаж болно.",tip:"sum хувьсагчийг 0-ээс эхлүүлээд давталт бүрд дараагийн тоог нэмнэ.",code:'#include <stdio.h>\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n        sum = sum + i;\n    }\n    printf("%d", sum);\n    return 0;\n}',explain:["sum = 0 — нийлбэрийн эхний утга.","i 1-ээс 5 хүртэл өөрчлөгдөнө.","Давталт бүрд i-г sum дээр нэмнэ.","1+2+3+4+5 = 15."],challenge:"1-ээс 10 хүртэлх тоонуудын нийлбэрийг олдог болгоорой.",out:"15",q:"1+2+3+4+5 нийлбэр хэд вэ?",opts:["10","15","20"],correct:1,why:"Нийлбэр нь 15."},
{title:"Функц (function)",heading:"Өөрийн функц бичих",desc:"Функц нь тодорхой ажлыг гүйцэтгэдэг нэртэй кодын хэсэг. Нэг ажлыг олон газар дахин ашиглахад тусална.",tip:"Функцэд нэр өгч, шаардлагатай бол параметр авна. return нь үр дүнг буцааж болно.",code:'#include <stdio.h>\nint niilber(int a, int b) {\n    return a + b;\n}\nint main() {\n    printf("%d", niilber(3, 4));\n    return 0;\n}',explain:["niilber функц хоёр бүхэл тоо авна.","return a + b нь нийлбэрийг буцаана.","main дотор niilber(3, 4) дуудагдаж 7 буцаана."],challenge:"Хоёр тооны үржвэрийг буцаадаг urjver() функц бичээрэй.",out:"7",q:"return ямар үүрэгтэй байж болох вэ?",opts:["Утга буцаах","Дэлгэц унтраах","Хувьсагч устгах"],correct:0,why:"return нь функцээс утга буцаах эсвэл функцийн гүйцэтгэлийг дуусгана."},
{title:"Массив (array)",heading:"Олон утгыг нэг нэрээр хадгалах",desc:"Массив нь ижил төрлийн олон утгыг нэг нэрийн дор хадгална. Элемент бүр индексээр дугаарлагддаг.",tip:"C хэлний массивын индекс 0-ээс эхэлдэг. 3 элементтэй массивын индексүүд 0, 1, 2 байна.",code:'#include <stdio.h>\nint main() {\n    int dun[3] = {80, 90, 75};\n    printf("%d", dun[1]);\n    return 0;\n}',explain:["dun[3] нь гурван бүхэл тоо хадгалах массив.","{80, 90, 75} нь эхний утгууд.","dun[1] нь хоёр дахь элемент буюу 90."],challenge:"Массивын гурав дахь утгыг хэвлээрэй. Индекс 2 гэдгийг санаарай.",out:"90",q:"int a[3] массивын эхний элементийн индекс хэд вэ?",opts:["0","1","3"],correct:0,why:"C хэлний массивын индекс 0-ээс эхэлдэг."},
{title:"Алдаа засах",heading:"Алдааг тайван олж сур",desc:"Програм ажиллахгүй үед мөр бүрийг шалгаж, хаалт, цэгтэй таслал, хувьсагчийн нэр болон өгөгдлийн төрлийг нягтал.",tip:"Алдааны мэдэгдлийг унш. Нэг удаад нэг өөрчлөлт хийж дахин ажиллуулах нь алдааг олоход тусалдаг.",code:'#include <stdio.h>\nint main() {\n    int a = 5;\n    printf("%d", a);\n    return 0;\n}',explain:["printf мөрийн төгсгөлд ; байгаа эсэхийг шалга.","Хаалт бүр нээгдэж, зөв хаагдсан эсэхийг шалга.","Формат тодорхойлогч хувьсагчийн төрөлтэй тохирч байгаа эсэхийг шалга."],challenge:"Энэ кодоос нэг цэгтэй таслалыг түр арилгаад компайлер ямар алдаа заахыг ажиглаарай.",out:"5",q:"Код ажиллахгүй бол эхлээд юу хийх нь зөв бэ?",opts:["Алдааны мэдэгдэл, мөрүүдийг шалгах","Бүх кодыг устгах","Компьютерээ шууд солих"],correct:0,why:"Алдааны мэдэгдэл нь асуудлын шалтгааныг олоход тусалдаг."},
{title:"Жижиг төсөл",heading:"Энгийн тооны машин",desc:"Одоо сурсан хувьсагч, оролт, гаралт, арифметик үйлдлээ ашиглан хоёр тооны нийлбэр олдог жижиг програм хийнэ.",tip:"Төслийг жижиг алхамд хуваа: оролт авах → тооцоолох → үр дүн хэвлэх → өөр утгаар шалгах.",code:'#include <stdio.h>\nint main() {\n    int a = 12, b = 8;\n    int sum = a + b;\n    printf("%d + %d = %d", a, b, sum);\n    return 0;\n}',explain:["a болон b хувьсагчдад 12, 8 хадгална.","sum = a + b нийлбэрийг бодно.","printf() гурван утгыг нэг мөрөнд харуулна."],challenge:"Кодыг өөрчилж хасах эсвэл үржүүлэх үйлдэл хийлгээрэй.",out:"12 + 8 = 20",q:"12 + 8 хэд вэ?",opts:["18","20","96"],correct:1,why:"12 + 8 = 20."},
{title:"Нэгдсэн шалгалт",heading:"Мэдлэгээ нэгтгэе",desc:"Сүүлийн хичээлээр C хэлний үндсэн бүтэц, хувьсагч, нөхцөл, давталт, функцийн ойлголтоо эргэн санаарай.",tip:"Хариултаа таамаглаад зогсохгүй кодоо өөрөө бичиж шалгаарай. Ойлгоогүй сэдвээ зүүн талын жагсаалтаас дахин нээж болно.",code:'#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        printf("C хэл! ");\n    }\n    return 0;\n}',explain:["for давталт 3 удаа ажиллана.","Давталт бүрд “C хэл!” хэвлэнэ.","Хичээл дууссан ч өмнөх сэдвүүдийг дахин давтаж болно."],challenge:"Кодыг өөрчилж “Би программист болно!” гэсэн үгийг гурван удаа хэвлээрэй.",out:"C хэл! C хэл! C хэл!",q:"for давталтын гол хэрэглээ юу вэ?",opts:["Үйлдлийг давтах","Зөвхөн зураг зурах","Хувьсагчийн нэр өөрчлөх"],correct:0,why:"for нь нөхцөл, тоолуур ашиглан үйлдлийг давтдаг."}
];

const practiceQuestions = [
  {q:"int төрлийн хувьсагч юунд зориулагдсан бэ?",opts:["Бүхэл тоо","Зураг","Нэг файл"],correct:0},
  {q:"Дэлгэцэд текст хэвлэх функц аль вэ?",opts:["scanf()","printf()","sqrt()"],correct:1},
  {q:"10 % 4 хэд вэ?",opts:["2","2.5","40"],correct:0},
  {q:"if-ийн дараа нөхцөлийг юунд бичдэг вэ?",opts:["Дугуй хаалт ()","Дөрвөлжин хаалт []","Хашилт \"\""],correct:0},
  {q:"Массивын эхний индекс хэд вэ?",opts:["1","0","-1"],correct:1},
  {q:"i++ ямар үйлдэл вэ?",opts:["Нэгээр нэмнэ","Нэгээр хасна","Хуваана"],correct:0}
];
let current = 0;
let completed = JSON.parse(localStorage.getItem("cCourseCompleted") || "[]");
let selectedMini = null;
let miniChecked = false;
let practiceIndex = 0;
let practiceScore = 0;

const $ = id => document.getElementById(id);
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function renderList(){
  $("lessonList").innerHTML = lessons.map((l,i)=>`<button class="lesson-item ${i===current?"active":""} ${completed.includes(i)?"done":""}" data-index="${i}"><span class="num">${completed.includes(i)?"✓":i+1}</span><span>${l.title}</span></button>`).join("");
  document.querySelectorAll(".lesson-item").forEach(b=>b.addEventListener("click",()=>showLesson(Number(b.dataset.index))));
  $("sideCount").textContent=`${completed.length}/20`;
}
function renderMiniQuiz(){
  const l=lessons[current]; selectedMini=null; miniChecked=false;
  $("questionText").textContent=l.q;
  $("quizCounter").textContent=`${current+1}/20`;
  $("answerFeedback").textContent=""; $("answerFeedback").className="feedback";
  $("answerOptions").innerHTML=l.opts.map((o,i)=>`<label class="answer-option"><input type="radio" name="miniAnswer" value="${i}"><span>${String.fromCharCode(65+i)}. ${o}</span></label>`).join("");
  $("answerOptions").querySelectorAll("input").forEach(input=>input.addEventListener("change",()=>{
    selectedMini=Number(input.value);
    $("answerOptions").querySelectorAll(".answer-option").forEach(x=>x.classList.remove("selected"));
    input.closest(".answer-option").classList.add("selected");
  }));
}
function showLesson(index){
  current=Math.max(0,Math.min(lessons.length-1,index));
  const l=lessons[current];
  $("lessonPosition").textContent=`Хичээл ${current+1} / ${lessons.length}`;
  $("lessonTitle").textContent=`${current+1}. ${l.title}`;
  $("contentHeading").textContent=l.heading;
  $("lessonDescription").textContent=l.desc;
  $("lessonTip").textContent=l.tip;
  $("exampleCode").textContent=l.code;
  $("codeEditor").value=l.code;
  $("explanationList").innerHTML=l.explain.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
  $("challengeText").textContent=l.challenge;
  $("prevBtn").disabled=current===0;
  $("nextBtn").textContent=current===lessons.length-1?"Дахин эхлэх ↻":"Дараах →";
  $("completeBtn").textContent=completed.includes(current)?"✓ Дуусгасан":"✓ Хичээл дуусгах";
  $("completeBtn").classList.toggle("completed",completed.includes(current));
  $("outputText").textContent="Кодоо ажиллуулахад үр дүн энд гарна.";
  renderList();renderMiniQuiz();
}
function escapeHtml(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}
function simulate(code){
  const l=lessons[current];
  if(code.trim()===l.code.trim()) return l.out;
  // Safe, deliberately limited learning simulator: no arbitrary code execution.
  const printMatch=[...code.matchAll(/printf\s*\(\s*"((?:\\.|[^"\\])*)"/g)];
  if(printMatch.length){
    return printMatch.map(m=>m[1].replaceAll("\\n","\n").replaceAll("\\t","\t")).join("") + "\n\n(Тайлбар: энэ хялбар симулятор нь бүх C синтаксийг бодитоор ажиллуулахгүй.)";
  }
  if(/scanf\s*\(/.test(code)) return "Энэ жишээнд scanf() оролт шаардаж байна.\nЖишээ оролтыг код дотор түр утгаар өгч туршаарай.";
  if(!code.trim()) return "Код хоосон байна. Жишээ код бичээд дахин оролдоорой.";
  return "Энэ кодын үр дүнг симулятор таньж чадсангүй.\nЖишээ кодын “Ажиллуулах” товчийг туршаарай.";
}
$("startBtn").addEventListener("click",()=>{$("workspace").scrollIntoView({behavior:"smooth"});showLesson(current)});
$("prevBtn").addEventListener("click",()=>showLesson(current-1));
$("nextBtn").addEventListener("click",()=>showLesson(current===lessons.length-1?0:current+1));
$("runBtn").addEventListener("click",()=>{$("outputText").textContent=lessons[current].out;toast("Жишээний үр дүнг харууллаа")});
$("runEditorBtn").addEventListener("click",()=>{$("outputText").textContent=simulate($("codeEditor").value);});
$("clearOutputBtn").addEventListener("click",()=>{$("outputText").textContent="Гаралт арилгалаа."});
$("copyBtn").addEventListener("click",async()=>{try{await navigator.clipboard.writeText($("exampleCode").textContent);toast("Код хууллаа")}catch(e){$("codeEditor").select();document.execCommand("copy");toast("Код хууллаа")}});
$("completeBtn").addEventListener("click",()=>{
  if(!completed.includes(current)){completed.push(current);localStorage.setItem("cCourseCompleted",JSON.stringify(completed));toast("Хичээл дууссан гэж тэмдэглэлээ!")}
  else toast("Энэ хичээл аль хэдийн дууссан.");
  renderList();$("completeBtn").textContent="✓ Дуусгасан";$("completeBtn").classList.add("completed");
});
$("checkAnswerBtn").addEventListener("click",()=>{
  const l=lessons[current], f=$("answerFeedback");
  if(selectedMini===null){f.textContent="Эхлээд нэг хариулт сонгоно уу.";f.className="feedback bad";return}
  if(selectedMini===l.correct){f.textContent="✓ Зөв хариулт! "+l.why;f.className="feedback good"}
  else{f.textContent="Дахин оролдоорой. "+l.why;f.className="feedback bad"}
});
document.querySelectorAll(".nav-link").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".nav-link").forEach(n=>n.classList.remove("active"));b.classList.add("active");
  const view=b.dataset.view;
  if(view==="course"){$("workspace").scrollIntoView({behavior:"smooth"});showLesson(current)}
  else if(view==="practice"){openPractice()}
  else if(view==="quiz"){openFinalQuiz()}
  else if(view==="progress"){openProgress()}
}));
function openPractice(){
  const q=practiceQuestions[practiceIndex%practiceQuestions.length];
  $("lessonPosition").textContent=`Дасгал ${practiceIndex+1} / ${practiceQuestions.length}`;
  $("lessonTitle").textContent="Мэдлэгээ дасгалаар бататгая";
  $("contentHeading").textContent="Богино дасгал";
  $("lessonDescription").textContent="Асуултыг уншаад нэг хариулт сонго. Дараа нь зөв хариултын тайлбарыг хараарай.";
  $("lessonTip").textContent="Буруу хариулсан бол холбогдох хичээлээ дахин уншаад оролдоорой.";
  $("exampleCode").textContent="// Дасгалын асуултаа баруун талд сонгоно уу.";
  $("codeEditor").value="// C хэлний дасгал\n#include <stdio.h>\nint main() {\n    return 0;\n}";
  $("explanationList").innerHTML="<li>Асуултыг анхааралтай уншина.</li><li>Хариултаа сонгоод шалгана.</li><li>Тайлбарыг уншиж мэдлэгээ бататгана.</li>";
  $("challengeText").textContent="Дасгалын дараа дараагийн асуултад шилжинэ.";
  $("completeBtn").textContent="Дасгалын хичээл рүү буцах";
  $("completeBtn").onclick=()=>{ $("completeBtn").onclick=null;showLesson(current)};
  $("questionText").textContent=q.q;$("quizCounter").textContent=`${practiceIndex+1}/${practiceQuestions.length}`;
  $("answerFeedback").textContent="";$("answerFeedback").className="feedback";
  $("answerOptions").innerHTML=q.opts.map((o,i)=>`<label class="answer-option"><input type="radio" name="miniAnswer" value="${i}"><span>${String.fromCharCode(65+i)}. ${o}</span></label>`).join("");
  $("answerOptions").querySelectorAll("input").forEach(input=>input.addEventListener("change",()=>{selectedMini=Number(input.value);$("answerOptions").querySelectorAll(".answer-option").forEach(x=>x.classList.remove("selected"));input.closest(".answer-option").classList.add("selected")}));
  $("checkAnswerBtn").onclick=()=>{
    if(selectedMini===null){$("answerFeedback").textContent="Нэг хариулт сонгоно уу.";return}
    if(selectedMini===q.correct){$("answerFeedback").textContent="✓ Зөв! Сайн байна. Дараагийн дасгалд шилжинэ."; $("answerFeedback").className="feedback good";practiceScore++;practiceIndex++;selectedMini=null;setTimeout(openPractice,900)}
    else{$("answerFeedback").textContent="Дахин бодоод үзээрэй. Хичээлийн тайлбараа ашигла."; $("answerFeedback").className="feedback bad"}
  };
  $("runBtn").onclick=()=>{$("outputText").textContent="Дасгалын хариултаа баруун талын хэсэгт шалгана."};
  $("workspace").scrollIntoView({behavior:"smooth"});
}
function openFinalQuiz(){
  $("lessonPosition").textContent="Нэгдсэн шалгалт";$("lessonTitle").textContent="C хэлний мэдлэгийн шалгалт";
  $("contentHeading").textContent="Өөрийгөө сорь!";
  $("lessonDescription").textContent="Шалгалтын горимд 6 асуултад хариулж, мэдлэгээ шалгаарай.";
  $("lessonTip").textContent="Санахгүй байгаа асуултын хичээлийг дахин нээж давтаж болно.";
  $("exampleCode").textContent="// Амжилт хүсье!\n// Хариултуудаа баруун талд сонгоно уу.";
  $("explanationList").innerHTML="<li>Асуулт бүрд нэг хариулт сонго.</li><li>Хариултаа шалга.</li><li>Нийт оноогоо тэмдэглэж ав.</li>";
  $("challengeText").textContent="Шалгалтын дараа алдаатай сэдвүүдээ дахин давтаарай.";
  $("questionText").textContent="Шалгалтыг эхлүүлэхийн тулд хариултуудыг сонгоно уу.";
  practiceIndex=0;practiceScore=0;openPractice();toast("Дасгалын горим эхэллээ");
}
function openProgress(){
  $("lessonPosition").textContent="Таны ахиц";$("lessonTitle").textContent=`${completed.length} / ${lessons.length} хичээл дууссан`;
  $("contentHeading").textContent="Суралцах ахиц";
  $("lessonDescription").textContent=`Та нийт ${lessons.length} хичээлээс ${completed.length}-ыг дуусгасан байна. Үлдсэн хичээлээ үргэлжлүүлээрэй.`;
  $("lessonTip").textContent="Хичээл бүрийн доорх “Хичээл дуусгах” товчийг дарснаар ахиц хадгалагдана. Энэ төхөөрөмжийн browser дээр хадгалагдана.";
  $("exampleCode").textContent=`Ахиц: ${Math.round(completed.length/lessons.length*100)}%\nДуусгасан: ${completed.length}\nҮлдсэн: ${lessons.length-completed.length}`;
  $("explanationList").innerHTML=lessons.map((l,i)=>`<li>${completed.includes(i)?"✓":"○"} ${l.title}</li>`).join("");
  $("challengeText").textContent="Ахицын бүртгэлээ дахин эхлүүлэх бол дараах товчийг дарна.";
  $("completeBtn").textContent="Ахиц тэглэх";$("completeBtn").onclick=()=>{if(confirm("Дуусгасан хичээлийн бүртгэлийг тэглэх үү?")){completed=[];localStorage.removeItem("cCourseCompleted");$("completeBtn").onclick=null;showLesson(0);toast("Ахиц тэглэгдлээ")}};
  $("questionText").textContent="Суралцах зөвлөгөө";$("answerOptions").innerHTML="<p class='question'>Өдөр бүр 10–15 минут код бичиж турших нь үр дүнтэй.</p>";$("answerFeedback").textContent="";$("checkAnswerBtn").onclick=()=>showLesson(current);
  $("workspace").scrollIntoView({behavior:"smooth"});renderList();
}
document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>{if(b.textContent!=="MN")toast("Одоогоор Монгол хэлний хувилбар идэвхтэй байна.")}));
showLesson(0);
