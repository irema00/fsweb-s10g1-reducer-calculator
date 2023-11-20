# Sorunu Anlamak:

1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir?
   1 butonuna basıldığında buton üzerindeki onClick ile eventHandler fonksiyonuna ulaşıyoruz. eventHandler fonksiyonu içerisinde dispatch ettiğimiz addOne action oluşturucu çalışıyor ve addOne içerisindeki stateini tuttuğumuz sayıya +1 ekliyor. App functionımızdaki return TotalDisplay kısmındaki state.total ise güncellenen değeri render ediyor.

Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

- Kullanıcı 1 butonuna tıkadı.
- 1 butonundaki onClick çalıştı.
  -1 butonundaki onClick, App.js içerisindeki eventHandler fonksiyonuna ulaştı.
  -App.js içerisindeki eventHandler çalıştı.
  -eventHandler addOne actiona ulaştı.
  -addOne action çalıştı.
  addOne action total value'ya artı 1 ekledi.
- TotalDisplay total artı 1'i gösterdi.
