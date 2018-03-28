# 栅格布局
![Alt text(](https://upload-images.jianshu.io/upload_images/1815684-4ccba84f8992c11b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/504) 
### Flowline的总宽度为W，column的宽度为w(列宽)，Gutter的宽度为g(槽或间隙)，Margin的宽度为m(外边距)，栅格列数为N（列数）

### W = w*N + g*(N-1) + 2m；g的宽度通常为m的两倍，所以：
 
###  列宽：w= [W - 2m- g*(N-1)]/N  
### 列数: N = [W - 2m + g ]/(w + g)