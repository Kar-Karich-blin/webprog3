import { useState } from 'react';
import { type Course } from '../types';
import { Button } from './Button';

interface CourseCardProps {
  course: Course;
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
}

export const CourseCard = ({ course, isSelected, onToggleSelect }: CourseCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onToggleSelect(course.id);
    }, 500); 
  };

  return (
    <div className={`course-card ${isSelected ? 'course-card_selected' : ''}`}>
      <div>
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__description">{course.description}</p>
      </div>
      <Button 
  text={isSelected ? "Выбрано" : "Выбрать"} 
  variant={isSelected ? 'secondary' : 'primary'} 
  onClick={handleClick} 
  isLoading={isLoading}
  icon={isSelected ? "🌸" : "🍥"}
    />
    </div>
  );
};