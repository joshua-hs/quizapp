import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Divider } from '@mui/material';

export interface ResultAccordionProps {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  userWasCorrect: boolean;
  statement: string;
  setSelectedQuestion: Function;
  shouldDarken: boolean;
}

export function ResultAccordion({
  question,
  userAnswer,
  correctAnswer,
  userWasCorrect,
  statement,
  setSelectedQuestion,
  shouldDarken,
}: ResultAccordionProps) {
  return (
    <div>
      <Accordion
        onChange={(_event, expanded) =>
          expanded ? setSelectedQuestion(question) : setSelectedQuestion('')
        }
        sx={{
          transition: 'all 0.5s ease 0s',
          filter: shouldDarken ? 'brightness(70%)' : 'brightness(100%)',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: 'bold', m: 1 }}>
            {question} {userWasCorrect ? '✅' : '❌'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: '0.5rem' }}>
          <Typography>
            Your answer of <b>{userAnswer}</b> was{' '}
            {userWasCorrect ? (
              <Box component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
                correct.
              </Box>
            ) : (
              <Box component="span">
                <Box component="span" sx={{ color: 'red', fontWeight: 'bold' }}>
                  incorrect.{' '}
                </Box>
                The correct answer is{' '}
                <Box component="span" sx={{ fontWeight: 'bold' }}>
                  {correctAnswer}.
                </Box>
              </Box>
            )}
            <Divider sx={{ mt: 2, mb: 2 }} />
            <InfoOutlinedIcon sx={{ mr: 1 }} />
            <Box component="span" sx={{ fontStyle: 'italic' }}>
              {statement}
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
