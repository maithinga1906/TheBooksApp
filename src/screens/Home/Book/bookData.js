import Images from './../../../themes/Images/images';
const books = [
  {
    idBooks: 1,
    nameBook: 'Để con được ốm thêm vài lần',
    author: 'Nguyễn Trí Đoàn',
    rate: 1,
    description:
      'Kimi no Na wa là tác phẩm điện ảnh mới của đạo diễn Makoto Shinkai (đạo diễn 5cm/s, The Garden of Words, Voices of a Distant Star). Mitsuha - cô nữ sinh sống tại một vùng quê Nhật Bản, chán ngán cuộc sống hiện tại và luôn mong',
    comment:
      'Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt.',
    view: 1284,
    image: Images.book,
    category: 'Đọc nhiều',
  },
  {
    idBooks: 2,
    nameBook: 'Your Name',
    author: 'Shinkai Makolo',
    rate: 2,
    description:
      'Mitsuha - một nữ sinh sống tại vùng quê Nhật Bản, chán ngán cuộc sống hiện tại và luôn mong được lên Tokyo sống. Taki - một cậu nam sinh ở Tokyo, làm thêm tại một nhà hàng Ý sau giờ học, thích vẽ vời và quan tâm đến ngành kiến trúc',
    view: 1284,
    comment:
      'Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt.',
    image: Images.book1,
    category: 'Sách được yêu thích',
  },
  {
    idBooks: 3,
    nameBook: 'ĐẠO TÌNH',
    author: 'Chu Ngọc',
    rate: 4,
    description:
      'Đây là tác phẩm hắc bang, bối cảnh hoành tráng, tình tiết đẫm máu u ám. Nếu bạn muốn xem câu truyện tình lãng mạn thì đừng nhảy vào hố này. "Đạo tình" là một thế giới đen tối, trong đó nam chính tuyệt đối không phải là người tốt.',
    view: 1284,
    comment:
      'Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt.',
    image: Images.book2,
    category: 'Đọc nhiều',
  },
  {
    idBooks: 4,
    nameBook: 'SỔ TAY TU LUYỆN CỦA THÁM TỬ LỪNG DANH',
    author: 'Phì Qua',
    rate: 4,
    description:
      'Có một điều, xin hãy luôn nhớ kỹ, đừng bao giờ phí công sức đi tìm đáp án của những câu đố không lời giải.',
    view: 1284,
    comment: 'Viết lách là nghề phụ còn làm tổng tài mới là chính đúng không vậy chị gái @v@.',
    image: Images.book3,
    category: 'Sách mượn nhiều',
  },
  {
    idBooks: 5,
    nameBook: 'Một lít nước mắt',
    author: 'Kito aya',
    rate: 4,
    description:
      'Một lít nước mắt là cuốn sách được tổng hợp từ những trang nhật ký chống chọi với căn bệnh thoái hóa tiểu não trong vòng tám năm của Kito Aya. Cuốn sách được xuất bản không lâu trước khi cô qua đời.',
    view: 1284,
    comment: 'Đọc truyện mà khó chịu thật sự, bản dịch nửa sau còn có quá nhiều từ hán việt.',
    image: Images.book5,
    category: 'Sách mới',
  },
  {
    idBooks: 6,
    nameBook: 'YÊU EM TỪ CÁI NHÌN ĐẦU TIÊN',
    author: 'Cố Mạn',
    rate: 5,
    description:
      'Truyện Yêu Em Từ Cái Nhìn Đầu Tiên của Cố Mạn kể về câu chuyện tình yêu bắt đầu từ thế giới ảo, nơi giao lưu giữa các bạn trẻ với nhau.',
    view: 1284,
    comment:
      'Đọc hoài đọc mãi, cuối cùng chốt lại chẳng truyện nào có thể khiến mình đọc đi đọc lại cũng như cày phim lại như truyện này... Tiêu Nại - Vi Vi.',
    image: Images.book6,
    category: 'Sách mới',
  },
  {
    idBooks: 7,
    nameBook: 'Gửi Thanh Xuân Ấm Áp Của Chúng Ta',
    author: 'Triệu Kiền Kiền',
    rate: 4,
    description:
      'Gửi Thanh Xuân Ấm Áp Của Chúng Ta - Tình yêu vốn là một điều kì lạ. Chẳng phải người ta vẫn hay nói là tình yêu không thể dùng lý trí để giải quyết sao? Nhưng không ngờ cô lại có thể lý trí đến như vậy. Là bởi vì yêu chưa đủ, hay đã yêu quá nhiều...',
    view: 1284,
    comment:
      'Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt.',
    image: Images.book7,
    category: 'Sách mượn nhiều',
  },
  //more
  {
    idBooks: 8,
    nameBook: 'EM LÀ NIỀM KIÊU HÃNH CỦA ANH',
    author: 'Cố Mạn',
    rate: 5,
    description:
      'Thời trung học, anh không yêu cô là thật! \nAnh từng yêu một cô gái khác, đó là thật! \nNhưng \nNăm anh ba mươi tuổi, anh đã cặm cụi viết thư, trả lời những câu hỏi của cô năm mười bảy tuổi. Điều đó là thật.',
    view: 1584,
    comment:
      'Có nhiều b đọc mấy truyện cao siêu quen r đọc truyện này bảo nhạt, riêng mình thì thấy truyện rất hay và chân thật thực tế, vừa lquan đến tình yêu và gia đình cũng như hiện thực xã hội, đọc xong khiến mình còn suy ngẫm, cũng ngọt ngào hài hước, nói chung là đáng để đọc.',
    image: Images.book8,
    category: 'Sách được yêu thích',
  },
  {
    idBooks: 9,
    nameBook: 'HÔN NHÂN KHÔNG TÌNH YÊU',
    author: 'Diệp Lạc vô tâm',
    rate: 5,
    description:
      'Thời trung học, anh không yêu cô là thật! \nAnh từng yêu một cô gái khác, đó là thật! \nNhưng \nNăm anh ba mươi tuổi, anh đã cặm cụi viết thư, trả lời những câu hỏi của cô năm mười bảy tuổi. Điều đó là thật.',
    view: 1584,
    comment:
      'Có nhiều b đọc mấy truyện cao siêu quen r đọc truyện này bảo nhạt, riêng mình thì thấy truyện rất hay và chân thật thực tế, vừa lquan đến tình yêu và gia đình cũng như hiện thực xã hội, đọc xong khiến mình còn suy ngẫm, cũng ngọt ngào hài hước, nói chung là đáng để đọc.',
    image: Images.book9,
    category: 'Sách được yêu thích',
  },
  {
    idBooks: 10,
    nameBook: 'Mãi mãi là bao xa',
    author: 'Diệp Lạc vô tâm',
    rate: 2,
    description:
      'Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”:',
    view: 1584,
    comment:
      'Có nhiều b đọc mấy truyện cao siêu quen r đọc truyện này bảo nhạt, riêng mình thì thấy truyện rất hay và chân thật thực tế, vừa lquan đến tình yêu và gia đình cũng như hiện thực xã hội, đọc xong khiến mình còn suy ngẫm, cũng ngọt ngào hài hước, nói chung là đáng để đọc.',
    image: Images.book10,
    category: 'Sách mới',
  },
  {
    idBooks: 11,
    nameBook: 'Mãi mãi là bao xa',
    author: 'Diệp Lạc vô tâm',
    rate: 2,
    description:
      'Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”:',
    view: 1584,
    comment:
      'Có nhiều b đọc mấy truyện cao siêu quen r đọc truyện này bảo nhạt, riêng mình thì thấy truyện rất hay và chân thật thực tế, vừa lquan đến tình yêu và gia đình cũng như hiện thực xã hội, đọc xong khiến mình còn suy ngẫm, cũng ngọt ngào hài hước, nói chung là đáng để đọc.',
    image: Images.book10,
    category: 'Sách mượn nhiều',
  },
  {
    idBooks: 12,
    nameBook: 'Mãi mãi là bao xa',
    author: 'Diệp Lạc vô tâm',
    rate: 2,
    description:
      'Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”:',
    view: 1584,
    comment:
      'Có nhiều b đọc mấy truyện cao siêu quen r đọc truyện này bảo nhạt, riêng mình thì thấy truyện rất hay và chân thật thực tế, vừa lquan đến tình yêu và gia đình cũng như hiện thực xã hội, đọc xong khiến mình còn suy ngẫm, cũng ngọt ngào hài hước, nói chung là đáng để đọc.',
    image: Images.book10,
    category: 'Đọc nhiều',
  },
  {
    idBooks: 13,
    nameBook: 'Mãi mãi là bao xa',
    author: 'Diệp Lạc vô tâm',
    rate: 2,
    description:
      'Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”:',
    view: 1584,
    comment:
      'Có nhiều b đọc mấy truyện cao siêu quen r đọc truyện này bảo nhạt, riêng mình thì thấy truyện rất hay và chân thật thực tế, vừa lquan đến tình yêu và gia đình cũng như hiện thực xã hội, đọc xong khiến mình còn suy ngẫm, cũng ngọt ngào hài hước, nói chung là đáng để đọc.',
    image: Images.book10,
    category: 'Đọc nhiều',
  },
  {
    idBooks: 14,
    nameBook: 'Nếu Một Ngày Cậu Bất Chợt Rời Xa',
    author: 'Ban Yoon Hwan',
    rate: 5,
    description: 'Sao cậu không tới gần người khác và cũng không để người khác tới gần cậu thế?',
    view: 1484,
    comment:
      'E hèm! Nãy h viết nhìu cái đánh giá về các sách khác nhau rồi nên nói thẳng luôn! Nội dung thì mình ko nói tới! Còn về phần đóng gói khá tệ, nếu ko muốn nói là rất tệ! Plastic bọc sách giống như bị "bay hơi" vậy á! Chí ít thì hơi rách chút cũng đc nhưng mất tiêu thế này thì tệ hết sức! Sách còn bị bám bụi rất nhiều, lấy khăn giấy lau xong đen thui lun! Bực hết chỗ nói! Đã vậy cái bookmark còn cong vòng cong vẹo, vuốt cả tiếng đồng hồ mới thẳng lại đc như hình, nói chung là dù có thể mua ở chỗ khác nhưng mình chọn tiki vì thấy bọc plastic kĩ càng và quà tặng ko hư hại j nhiều hết! Nhưng cuốn này thì thôi, hết muốn nói luôn!!!',
    image: Images.book11,
    category: 'Đọc nhiều',
  },
];
export default books;
