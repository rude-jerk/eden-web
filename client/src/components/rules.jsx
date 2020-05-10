import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Message } from 'semantic-ui-react';

const Rules = ({ list }) => {
  const { terms, rules, disallowed, allowed, yells, discord } = list;

  return (
    <>
      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Terms and Conditions</h3>
          </Card.Title>
          <Card.Text>
            <ol>
              {terms.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Formal Rules</h3>
          </Card.Title>
          <Card.Text>
            <p>
              Listed here is a list of formal rules. It will be expanded upon
              and modified in the future so please stay as current as
              realistically possible with them. If you see someone breaking the
              rules,{' '}
              <b>
                <u>please do not report them in public forums like Discord</u>
              </b>
              . Either let them know they should stop, or call a GM using the in
              game Help Desk. Staff takes these reports seriously and we follow
              up on each one, but we do not want anybody shamed publicly for
              things they are simply suspected of. Once staff concludes if they
              are cheating or not, we will take appropriate action.
            </p>
            <p>
              Regarding behavior: we don&apos;t have an all inclusive code of
              conduct manual for you to read so use common sense. If you are
              doing something that would have gotten you banned or in trouble on
              retail, it is more than likely against the rules here too. If you
              are doing inappropriate things that you wouldn&apos;t do to your
              friends--I would think twice about that too. Finally, if a GM asks
              you to stop a behavior--saying &quot;it isn&apos;t in the
              rules&quot; is not a valid excuse for ignoring the GM.
            </p>
            <p>
              We give our GMs the responsibility to uphold rules in the essence
              of fair play as well as to ensure that other&apos;s play
              experience is not effected negatively, not all rules will be
              listed as some must be handled on a case by case basis, Our GM
              staff upholds communication between themselves in order to ensure
              a consistency in policy and has measures to ensure that this does
              not get abused,{' '}
              <b>
                ALL GM requests must be upheld and if something is found to be
                wrong with a certain request it will be dealt with accordingly.
                In the event you feel a GM&apos;s judgement was off you may
                contact a council member via webform on the website tools
              </b>
            </p>
            <ol>
              {rules.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Disallowed third-party software</h3>
          </Card.Title>
          <Card.Text>
            <p>
              A list of disallowed plugins and other third-party software. This
              is not an exhastive list, to be absolutely safe stick the the
              approved list or ask a staff member to update the list. Ashita and
              its plugins are listed first but Windower and its addon/plugin
              alternative are also disallowed.
            </p>
            <ol>
              {disallowed.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Allowed third-party software</h3>
          </Card.Title>
          <Card.Text>
            <p>A list of allowed plugins and other third-party software.</p>
            <ol>
              {allowed.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Yell Rules</h3>
          </Card.Title>

          <Card.Text>
            <ol>
              {yells.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Discord Rules</h3>
          </Card.Title>
          <Card.Text>
            <ol>
              {discord.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" className="m-3">
        <Card.Body>
          <Card.Title>
            <h3>Remarks</h3>
          </Card.Title>
          <Card.Text>
            <p>
              We want to promote a server that promotes teamwork first and
              foremost. Many of our development decisions including removing
              some quality of life enhancements are based on this tenant. We
              know some things can be annoying and time consuming but we feel
              like some of those things are unavoidable to provide a stronger
              feeling of community. Please report to the administration when you
              think there is something that we overlooked and would rather not
              have or rather have in the game.
            </p>
            <p>
              While not a rule, we would like to see stronger players
              encouraging and helping newer and weaker players in the form of:
              inviting them into your experience point parties, sharing
              non-secret information about monsters and drops, and more. When
              more people feel welcomed to this server we will all prosper.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

Rules.propTypes = {
  list: PropTypes.shape({
    allowed: PropTypes.arrayOf(PropTypes.string),
    disallowed: PropTypes.arrayOf(PropTypes.string),
    discord: PropTypes.arrayOf(PropTypes.string),
    rules: PropTypes.arrayOf(PropTypes.string),
    terms: PropTypes.arrayOf(PropTypes.string),
    yells: PropTypes.arrayOf(PropTypes.string),
  }),
};

Rules.defaultProps = {
  list: {
    allowed: [],
    disallowed: [],
    discord: [],
    rules: [],
    terms: [],
    yells: [],
  },
};

export default Rules;
