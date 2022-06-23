enum LessonType {
  Live = 'live',
  Class = 'class',
}

type GCMSLesson = {
  id: string;
  slug: string;
  title: string;
  lessonType: string;
  availableAt: string;
};

class Lesson {
  id: string;
  slug: string;
  title: string;
  lessonType: LessonType;
  availableAt: Date;

  constructor(lesson: Lesson | GCMSLesson) {
    this.id = lesson.id;
    this.slug = lesson.slug;
    this.title = lesson.title;
    this.lessonType = lesson.lessonType as LessonType;
    this.availableAt = new Date(lesson.availableAt);
  };
};

export default Lesson;
export {
  type GCMSLesson,
  LessonType,
};