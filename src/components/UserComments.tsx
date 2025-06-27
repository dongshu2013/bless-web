export default function UserComments() {
  return (
    <div
      id="comments"
      className="z-10 relative pt-6 pb-[44px] md:pt-[50px] md:pb-[140px] w-full bg-[#FFF9E0F2] text-black scroll-mt-10"
    >
      <div
        className="z-0 absolute inset-0 opacity-100"
        style={{
          backgroundImage: "url('/images/comments-mask.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="text-center text-[30px] md:text-[50px] font-semibold">用户评价</div>

      <div className="relative z-10 mt-7 md:mt-[80px] px-5 md:px-[80px] w-full flex gap-8 overflow-x-auto hide-scrollbar">
        <CommentItem
          name="张伟"
          comment="我想提升财运/补财库，真正的好运，不是靠运气，而是靠内在能量结构准备好了。"
          date="2025-01-01"
        />

        <CommentItem
          name="张伟"
          comment="我想提升财运/补财库，真正的好运，不是靠运气，而是靠内在能量结构准备好了。"
          date="2025-01-01"
        />

        <CommentItem
          name="李华"
          comment="今天做了放生活动，通过释放生命，积累福报，转化个人业力与障碍。"
          date="2025-01-01"
        />

        <CommentItem
          name="李华"
          comment="今天做了放生活动，通过释放生命，积累福报，转化个人业力与障碍。"
          date="2025-01-01"
        />

        <CommentItem
          name="李华"
          comment="今天做了放生活动，通过释放生命，积累福报，转化个人业力与障碍。"
          date="2025-01-01"
        />
      </div>
    </div>
  );
}

const CommentItem = ({
  name,
  comment,
  date,
}: {
  name: string;
  comment: string;
  date: string;
}) => {
  return (
    <div
      className={`border border-[#0F282D33] rounded-2xl bg-[#112D330D] 
    min-w-[246px] md:min-w-[500px] h-[160px] md:h-[300px] px-5 md:px-[40px] py-5 md:py-[60px]
    flex flex-col justify-between
    `}
    >
      <div>
        <div className="text-[16px] md:text-[24px] font-semibold">{name}</div>

        <div className="mt-2 md:mt-4 text-[14px] md:text-[18px] leading-normal">{comment}</div>
      </div>

      <div className="text-[12px] md:text-[16px] opacity-50 font-semibold">{date}</div>
    </div>
  );
};
