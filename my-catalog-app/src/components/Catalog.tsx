import { useState, useEffect } from 'react';
import { type Course } from '../types';
import { Search } from './Search';
import { CourseList } from './CourseList';

const INITIAL_COURSES: Course[] = [
  { id: 1, title: 'JavaScript', description: 'Основы языка' },
  { id: 2, title: 'React', description: 'Компоненты и JSX' },
  { id: 3, title: 'Node.js', description: 'Сервер на JavaScript' },
];

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    document.title = selectedIds.length > 0 
      ? `Каталог (${selectedIds.length} выбрано)` 
      : 'Каталог курсов';
  }, [selectedIds]);

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filteredCourses = INITIAL_COURSES.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog">
      <h2 className="catalog__title">
        Каталог курсов {selectedIds.length > 0 && `(Выбрано: ${selectedIds.length})`}
      </h2>
      
      <Search value={searchTerm} onChange={setSearchTerm} />
      
      <div className="catalog__courses-wrapper">
        <h3 className="catalog__subtitle">Курсы</h3>
        <CourseList 
          courses={filteredCourses} 
          selectedIds={selectedIds} 
          onToggleSelect={toggleSelect}
        />
      </div>
    </div>
  );
};