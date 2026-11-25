import { type Course } from '../types';
import { CourseCard } from './CourseCard';

interface CourseListProps {
  courses: Course[];
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
}

export const CourseList = ({ courses, selectedIds, onToggleSelect }: CourseListProps) => {
  if (courses.length === 0) {
    return <p className="course-list__empty">Курсы не найдены</p>;
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard 
          key={course.id} 
          course={course} 
          isSelected={selectedIds.includes(course.id)} 
          onToggleSelect={onToggleSelect} 
        />
      ))}
    </div>
  );
};